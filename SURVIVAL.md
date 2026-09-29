# Survival: rancangan mekanik & arsitektur

Sistem bertahan hidup ala *The Long Dark* versi santai: empat **kebutuhan** (Lapar, Haus, Energi, Kandung kemih) terus berkurang, dan kebutuhan itu mengatur dua **vital** (Darah, Stamina). Makanan, air, tidur, dan toilet mengisinya kembali. Buff/debuff menyambungkan semuanya.

Semua angka ada di `public/assets/data/survival.json` (aturan) dan `public/assets/data/items.json` (nilai makanan, field `use`). Tuning tidak perlu menyentuh kode.

---

## 1. Loop inti

```
      jalan / lari / lompat ──► stamina turun ──► lapar & haus lebih cepat turun
                 ▲                                             │
                 │                                             ▼
     buff (segar, bugar) ◄── makan / minum / tidur / toilet ◄── kebutuhan rendah = debuff
                                                               │
                                     kebutuhan 0% ──► darah terkuras ──► pingsan (bangun di Balai, +4 jam)
```

| Kebutuhan | Turun karena | Diisi dengan | Kalau rendah (<25%) | Kalau 0% |
|---|---|---|---|---|
| **Lapar** | waktu, lari ×1.6, keracunan +60% | makan (apel, beri, jamur, telur) | *Lapar*: stamina pulih −30% | *Kelaparan*: darah −0.3/dtk, max darah −20%, max stamina −25% |
| **Haus** | waktu, lari ×2 | keran Balai, botol air | *Haus*: stamina pulih −40% | *Dehidrasi*: darah −0.45/dtk, max stamina −30% |
| **Energi** | waktu, lari ×1.5 | tidur di kasur gazebo | *Ngantuk*: jalan −8% | *Kecapekan*: tidak bisa lari, jalan −18%, darah −0.12/dtk |
| **Kandung kemih** | waktu + **setiap minum/makan** (40% dari haus yang terisi) | toilet umum | *Kebelet*: stamina pulih −25%, jalan −5% | *Kebelet parah*: tidak bisa lari, jalan −25% |

Semua meter 0–100 dengan **100 = baik** (Kandung kemih 100 = kosong), jadi ring di HUD dibaca sama: penuh hijau, kosong merah.

### Vital

- **Stamina**: dipakai lari (12/dtk) dan lompat (9). Pulih 18/dtk setelah 0.9 dtk tidak dipakai. Mulai lari butuh ≥ 8. Habis = efek *Ngos-ngosan* 3.5 dtk (tidak bisa lari, animasi terengah).
  - **Max stamina** dikunci oleh **Energi**: di bawah 50% energi, cap turun linear sampai 50% saat energi 0. Juga oleh efek (keracunan −35%, kelaparan −25%, segar +10%, bugar +20%).
- **Darah**: hanya pulih (0.2/dtk) kalau **Lapar ≥ 35, Haus ≥ 35, Energi ≥ 15** dan tidak keracunan. *Kenyang & segar* (lapar & haus ≥ 75) menggandakannya, tidur juga ×2.
  - **Max darah** dikunci oleh keracunan (−20%) dan kelaparan (−20%).
  - Darah 0 = **pingsan**: layar gelap, waktu +4 jam, bangun di samping kasur Balai dengan 35% darah, kebutuhan minimal 30%, semua efek hilang.

**Ekspresi wajah** (`entities/player/face.js`) mengikuti kondisi paling mendesak: Kelelahan (terengah) → Keracunan/Mual (pipi & garis hijau, mulut bergelombang, kepala goyang) → Kebelet parah (mata terpejam, gemetar) → Kesakitan (darah < 30%) → Haus (lidah menjulur) → Lapar (mulut "o", air liur) → Ngantuk (mata sayu, kantung mata, menguap) → Kebelet → Senang (kenyang & segar) → Biasa. Terlihat di karakter dan di preview panel Tas/Profil (scroll di preview = zoom ke wajah).

Bagian bar yang **diarsir gelap** di HUD = kapasitas yang sedang terkunci. Tanda **+/−** di kanan bar darah = sedang pulih / terkuras. Panah ▾ di bawah ring = seberapa cepat kebutuhan itu turun (1–3 panah; ▴ = naik, mis. energi saat tidur).

## 1b. Musim, cuaca & lingkungan

Kalender ala Harvest Moon: 4 musim × 28 hari (Semi → Panas → Gugur → Dingin → tahun baru), hari berganti saat jam lewat tengah malam (termasuk saat tidur). Data di `public/assets/data/calendar.json`; tanggal tampil di kiri atas, kalender lengkap di tombol `K`, klik tanggal, atau kuda-kuda kalender di gazebo.

| Musim | Dunia | Kondisi karakter | Cuaca |
|---|---|---|---|
| 🌸 Semi | kelopak sakura beterbangan, daun gugur merah muda | *Udara musim semi* (pulih stamina +10%) | cerah 55 · berawan 20 · hujan 25 % |
| ☀ Panas | rumput paling hijau & tinggi, pohon kehijauan | *Kepanasan* jam 11:00–15:30 di luar (haus +60%, pulih stamina −15%) kecuali berteduh / buff *Segar* | cerah 65 · berawan 15 · hujan 20 % |
| 🍂 Gugur | rumput keemasan, pohon oranye, daun berjatuhan | *Udara sejuk* (haus −20%) | cerah 45 · berawan 25 · hujan 30 % |
| ❄ Dingin | salju: tanah putih, rumput pendek, pohon meranggas & bersalju, jejak kaki jelas, napas berembun | *Kedinginan* (max stamina −20%, pulih −35%, lapar +35%); malam: *Membeku* (darah −0.08/dtk) kecuali buff *Hangat* / *Perut hangat* | cerah 40 · berawan 20 · salju 40 % |

Cuaca tetap per hari (bisa diramal: kalender menampilkan cuaca besok). Hujan/salju: langit & dunia lebih gelap, partikel hujan + percikan / butir salju, suara hujan, jejak kaki lebih jelas, dan kondisi *Basah kuyup* / *Tertimbun salju* kalau tidak **berteduh** (di bawah atap gazebo, di mobil, atau memegang **Payung** di atas kepala). Saat tidur kondisi lingkungan tidak berlaku (selimut).

Penangkal: **Teh Hangat**, **Cokelat Panas** (buff *Hangat*), **Sup Jamur** (*Perut hangat*) untuk dingin; **Es Teh** / keran Balai (*Segar*) untuk terik; **Payung** untuk hujan & salju. Ekspresi baru: *Kedinginan* (pipi biru, ingus, menggigil) dan *Kepanasan*.

Barang liar musiman (`spawn.seasons` di items.json): apel & beri (panas, gugur), jamur (semi, gugur), bunga (semi, panas), kerang (semi–gugur), jahe (gugur, dingin). Saat musim berganti yang bukan musimnya layu, yang musimnya tumbuh.

Jejak kaki: pool tetap 80 jejak dalam satu draw call; langkah baru memakai slot tertua, tiap jejak memudar sendiri (umur per musim: 10 dtk semi … 30 dtk salju).

## 2. Profil karakter

`profile` di `survival.json`: nama, gelar, dan 4 **atribut** (1–10, 5 = rata-rata). Setiap poin di atas/bawah 5:

| Atribut | Efek per poin |
|---|---|
| Vitalitas | max darah ±6%, pulih darah ±8% |
| Ketahanan | max stamina ±6%, pulih stamina ±5%, biaya lari ∓5% |
| Metabolisme | kecepatan turun semua kebutuhan ∓5% |
| Imunitas | peluang efek buruk dari makanan ∓8%, durasinya ∓6% |

Atribut disimpan di save (slice `stats`), jadi nanti bisa naik lewat level/skill/pakaian tanpa mengubah format. Panel **Profil** (`P` atau klik HUD) menampilkan atribut, semua meter + laju per jam game, efek aktif, dan tips.

## 3. Efek (buff & debuff)

Dua jenis, keduanya punya `mods` yang dijumlahkan lalu dipakai sebagai `(1 + total)`:

- **Kondisi**: aktif otomatis selama meter memenuhi `above` / `below`. Versi parah menyembunyikan versi ringan (`hideIf`), mis. *Kelaparan* menggantikan *Lapar*.
- **Efek berwaktu**: dari aksi / makanan, punya `duration` (detik main) dan opsional `cure` (cara menyembuhkan).

| Efek | Jenis | Dari | Durasi | Isi |
|---|---|---|---|---|
| ☠ Keracunan | debuff | jamur (60%) | 150 dtk | darah −0.22/dtk, max darah −20%, max stamina −35%, darah tidak pulih, lapar +60%. **Sembuh: toilet** |
| 🤢 Mual | debuff | telur mentah (35%) | 70 dtk | pulih stamina −45%. **Sembuh: toilet** |
| 😮‍💨 Ngos-ngosan | debuff | stamina habis | 3.5 dtk | tidak bisa lari |
| ⚡ Energi buah | buff | beri | 90 dtk | pulih stamina +60% |
| 💦 Segar | buff | keran Balai | 120 dtk | max stamina +10%, pulih +20% |
| ☀ Cukup tidur | buff | tidur ≥ 6 jam | 480 dtk | max stamina +20%, pulih darah +50%, energi turun −40% |
| 😌 Lega | buff | toilet | 60 dtk | jalan +6% |
| 🛡 Kebal racun | buff | Penawar Racun | 240 dtk | **memblokir** Keracunan (`blocks`) |
| ☕ Melek | buff | Kopi | 240 dtk | energi turun −60%, tapi kandung kemih +50% lebih cepat |
| 🍲 Perut hangat | buff | Sup Jamur | 300 dtk | lapar turun −50%, pulih darah +50% |

Mod yang tersedia: `healthMax staminaMax healthRegen staminaRegen speed` (pecahan), `hunger thirst energy bladder` (kecepatan turun, pecahan), `health` (darah per detik), `noRun` (1 = tidak bisa lari).

Efek berwaktu juga bisa punya `cure` (tag penyembuh: `toilet`, atau tag dari `use.cure` sebuah item, mis. `penawar`, `jahe`) dan `blocks` (efek lain yang tidak bisa muncul selama efek ini aktif).

## 4. Aksi & tempat

**Balai Warga** (plaza baru di (24, −25), `BALAI` di `world/worldmap.js`; ikuti jalan cabang dari jalan selatan, dekat parkiran):

| Tempat | Aksi (E) | Efek |
|---|---|---|
| Keran air minum | Minum air · isi botol | Haus +35, buff *Segar*, semua **Botol Kosong** jadi **Botol Air** |
| Toilet umum | Pakai toilet umum | Layar gelap, Kandung kemih 100, sembuhkan Keracunan & Mual, buff *Lega*, waktu +15 menit |
| Gazebo + kasur | Tidur (lewati waktu) · **menyimpan game** saat bangun | Pilih 1 jam / 3 jam / sampai segar / sampai pagi (07:00). Kebutuhan lain tetap turun pelan (×0.45). Bangun lebih awal kalau darah < 25 dan terus turun |
| Papan BALAI WARGA | Baca | Penjelasan fasilitas |
| **Peti debug** (di kaki kasur gazebo, hanya kalau `DEBUG = true` di `game/config.js`) | Buka peti debug | Daftar **semua** item + efek pemakaiannya, ambil berapa pun, tombol uji kondisi (lapar/haus/ngantuk/kebelet 10%, darah 20%, stamina 0, keracunan, mual, pulihkan semua) |

**Makanan** (tas → pilih → *Makan/Minum*, juga untuk barang di tangan):

| Barang | Isi | Risiko |
|---|---|---|
| Apel | Lapar +18, Haus +6 | – |
| Beri | Lapar +8, Haus +8 | selalu *Energi buah* |
| Jamur | Lapar +12 | 60% *Keracunan* |
| Telur (mentah) | Lapar +24 | 35% *Mual* |
| Botol Air | Haus +40 → sisa **Botol Kosong** | – |
| Jahe (liar) | Lapar +3, **sembuhkan Mual** | – |
| Penawar Racun | Darah +10, **sembuhkan Keracunan & Mual**, buff *Kebal racun* | – |
| Perban (*Pakai*) | Darah +35 | – |
| Roti | Lapar +35 | Haus −4 |
| Sup Jamur | Lapar +40, Haus +15, buff *Perut hangat* | – (jamur yang dimasak aman) |
| Kopi | Energi +25, Haus +8, buff *Melek* | cepat kebelet |
| Minuman Energi | Stamina penuh, Haus +15, buff *Energi buah* | – |
| Oralit | Haus +50, Darah +8 (obat dehidrasi) | – |

### Masalah → penangkal

| Masalah | Penangkal |
|---|---|
| Keracunan | Penawar Racun (+ kebal 4 menit), toilet umum, atau tunggu |
| Mual | Jahe, Penawar Racun, toilet umum, atau tunggu |
| Lapar / Kelaparan | Roti, Sup Jamur, Telur, Apel… (Sup Jamur juga memperlambat lapar) |
| Haus / Dehidrasi | Keran Balai, Botol Air, Oralit |
| Ngantuk / Kecapekan | Tidur di gazebo; darurat: Kopi (tapi cepat kebelet) |
| Kebelet | Toilet umum |
| Darah rendah | Perban, Penawar Racun, Oralit; pulih sendiri kalau kenyang & tidak haus |
| Stamina habis | Minuman Energi, Beri; buff Segar / Cukup tidur menaikkan max-nya |

Item tanpa `spawn` (penawar, perban, roti, sup, kopi, minuman energi, oralit) belum muncul di alam: nanti dari toko / masak. Selama development semuanya bisa diambil dari **peti debug**.

Makanan tidak dipakai kalau tidak ada gunanya ("Kamu sudah kenyang"). Botol air muncul liar di taman (4 sekaligus), botol kosong diisi ulang di keran.

**Waktu**: 1 jam game = 60 detik main (`secondsPerGameHour`, sama dengan jam 60×). Tidur *N* jam disimulasikan sebagai *N*×60 detik dengan aturan tidur, lalu jam game dilompati (`skipTime`). Kalau jam sedang mengikuti jam asli, tidur mengubahnya ke jam manual.

## 5. Arsitektur kode

```
public/assets/data/survival.json   aturan & angka (kebutuhan, kondisi, efek, profil, atribut)
public/assets/data/items.json      nilai makanan: "use": { verb, hunger, thirst, …, effects: [{id, chance}], gives }
js/systems/stats.js     (layer 1)  SERVICE GENERIK: meter, profil, efek, aturan, simulasi tidur, save slice 'stats'
js/systems/daynight.js  (layer 1)  + skipTime(hours) → event time:skipped
js/entities/player/controller.js   lari: canRun() + runStamina(dt); lompat: tryJump(); kecepatan: speedMul(); animasi ngos-ngosan
js/ui/survival.js       (layer 4)  HUD kiri bawah + panel Profil (P) + toast efek
js/ui/ui.js / inventory.js         fadeThrough() layar gelap, openModal(html, onClick), tombol "Makan/Minum" → inventory:use
js/features/survival/   (layer 5)  Balai Warga (models.js: keran, toilet, gazebo), makan/minum, tidur, toilet, pingsan
js/features/pickup/                model semua item, meneruskan "use" ke defineItem, menghapus barang di tangan (inventory:discardHeld)
js/features/debug/      (layer 5)  panel peti debug (game/config.js DEBUG): semua item + tombol uji kondisi
js/main.js                         updateStats(dt, active) setelah fisika, updateSurvivalUI(dt) setelah prompt
```

- `systems/stats.js` tidak tahu soal DOM, 3D, atau Balai: game lain (farming, RPG) bisa memakainya dengan JSON berbeda (ganti kebutuhan, efek, atribut).
- Fitur **tidak saling impor**. Alur makan: panel tas `emit('inventory:use', {slot})` → survival `consume()`. Kalau barangnya di tangan, survival `emit('inventory:discardHeld')` → pickup membuang mesh-nya.
- Menghapus fitur survival: HUD & stamina tetap jalan (sistemnya di `systems/`), hanya Balai dan makan yang hilang.

### Event baru

| Event | Payload | Dari | Untuk |
|---|---|---|---|
| `stats:effect` | `{ id, on, def }` | systems/stats.js saat efek/kondisi mulai/selesai | ui/survival.js (toast) |
| `stats:depleted` | `{ meter: 'health' }` | systems/stats.js saat darah 0 | features/survival (pingsan) |
| `time:skipped` | `{ hours }` | systems/daynight.js `skipTime` | ui/ui.js (panel jam) |
| `inventory:use` | `{ slot }` (-1 = di tangan) | panel tas "Makan/Minum" | features/survival |
| `inventory:discardHeld` | none | features/survival | features/pickup |
| `survival:consumed` | `{ id, delta, cured }` | features/survival | (quest, statistik nanti) |
| `survival:slept` | `{ hours }` | features/survival | (quest, farming nanti) |
| `debug:chest` | none | peti debug di gazebo (features/survival) | features/debug |

### API `systems/stats.js`

`stats` (meter), `derived` (maxHealth/maxStamina/fullHealth/fullStamina, regen, healthRate, speed, noRun, rates per detik), `shown` (efek + kondisi aktif), `profile`, `RULES`, `NEEDS`, `METERS`; `updateStats(dt, playing)`; gerak `canRun speedMul spendStamina runStamina tryJump`; efek `addEffect removeEffect hasEffect cure`; aksi `consume setMeter sleep revive`.

## 6. Ide pengembangan berikutnya

1. **Memasak**: api unggun/kompor di Balai, `jamur` + `ranting` → *Sup jamur* (tanpa racun, lapar +35). Butuh `systems/crafting.js` (resep di JSON).
2. **Suhu tubuh** (meter ke-5 seperti The Long Dark): malam & hujan menurunkan, api/gazebo menaikkan. Cukup tambah `"warmth"` di `needs` + kondisi *Kedinginan*; laju bisa dikali dari `paletteAt()`/jam.
3. **Kualitas tidur**: kasur gazebo vs tidur di mobil vs di rumput (buff berbeda, risiko *Pegal*).
4. **Level & atribut naik**: XP dari lari/berenang/memasak menaikkan Ketahanan dst. Tempat simpannya sudah ada (`profile.attributes` di save).
5. **Makanan basi**: item punya `freshness` yang turun di tas; basi = peluang keracunan naik.
6. **Toko Balai**: beli botol air/apel dengan `price` yang sudah ada di items.json (butuh uang + server kalau multiplayer).
7. **Hotbar makanan**: angka 1–4 untuk makan cepat tanpa membuka tas.
8. **Efek visual**: layar berkedip merah saat darah turun, pandangan buram saat dehidrasi/ngantuk (uniform di `scenepost.frag.glsl`).
