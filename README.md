# Tester Drive World

Game web 3D bergaya [bruno-simon.com](https://bruno-simon.com): kamu mulai sebagai anak petani yang berjalan kaki, lalu naik ke monster truck dan menyetir di dunia isometrik, menabrak semua benda di sekitarnya.

## Cara main

Klik dua kali **`start.bat`**. Saat pertama kali dijalankan, dependency akan diinstall otomatis (butuh internet). Setelah itu server development Vite jalan dan browser terbuka di http://localhost:8765. Setiap kali file disimpan, halaman langsung ter-update. Butuh **Node.js 18+**.

- `start.bat build`: membuat versi produksi di `dist/` (kode di-minify) lalu membuka preview-nya.
- Lewat terminal: `npm run dev`, `npm run build`, `npm run preview`, `npm run check`.

Game ini **tidak bisa** dibuka dengan klik dua kali `index.html` (file://).

Debug lewat URL: `?jam=17.5` (kunci jam) dan `?kualitas=mid` (auto/high/mid/low).

**Kualitas grafis** (panel pengaturan): *Auto* (default di GPU laptop) menurunkan/menaikkan resolusi sendiri supaya ~50-60 fps; *Sedang* = FXAA, bloom setengah resolusi, shadow map 1024, rumput setengah; *Tinggi* = MSAA 4x + resolusi penuh. Centang "Tampilkan FPS" untuk melihat fps dan resolusi saat ini. Contoh: http://localhost:8765/?jam=19&kualitas=mid

## Struktur file

Kode dibagi per lapisan supaya fitur baru tidak perlu menyentuh banyak file:

```
js/main.js            entry: urutan boot + frame loop saja
js/game/config.js     konstanta game (ukuran dunia, spawn, kamera)
js/engine/            teknologi umum, bisa dipakai game lain (render, fisika, event, registry fitur, audio)
js/systems/           layanan gameplay umum (input, titik interaksi "tekan E", kamera, siang-malam)
js/world/             peta & lingkungan game ini (layout, props, tanah, air, rumput, langit, efek)
js/entities/          karakter (model.js = tampilan, controller.js = gerak) dan mobil
js/ui/                HUD, pengaturan, modal
js/features/          fitur gameplay, satu folder per fitur (contoh: bowling/, template di _template/)
public/assets/data/*.json    data yang bisa diedit (palet warna, papan info)
public/assets/shaders/*.glsl semua shader
tools/check.cjs       cek import & aturan lapisan: npm run check
vite.config.js        konfigurasi build (base relatif supaya jalan di GitHub Pages)
.github/workflows/    deploy otomatis ke GitHub Pages
CLAUDE.md             peta "mau ubah X → edit file Y" untuk AI
docs/ARCHITECTURE.md  detail modul, urutan loop, daftar event, rencana genre lain
```

## Deploy ke GitHub Pages

1. Sekali saja: di GitHub buka **Settings → Pages → Build and deployment → Source**, lalu pilih **GitHub Actions** (bukan "Deploy from a branch").
2. Klik dua kali **`build.bat`** (atau `build.bat pesan commit`). Script ini:
   - cek kode dan build (kalau gagal, berhenti tanpa push)
   - commit semua perubahan
   - push ke `main`
3. GitHub Actions (`.github/workflows/deploy.yml`) lalu build ulang dan publish `dist/` ke `https://<username>.github.io/<nama-repo>/`. Progresnya bisa dilihat di tab **Actions**.

Yang dipublish hanya hasil build (sudah di-minify, tanpa source map). Pages dari repo **private** butuh akun GitHub berbayar. Dengan akun gratis, pakai Netlify atau Cloudflare Pages (build command `npm run build`, folder output `dist`), atau jadikan repo publik. Kode yang jalan di browser selalu bisa dilihat orang, jadi **jangan pernah menaruh API key atau secret di `js/` atau `public/`**.

**Menambah fitur** (misalnya memancing): salin `js/features/_template/` ke `js/features/fishing/`, lalu daftarkan di `js/features/index.js`. Langkah lengkapnya ada di `js/features/README.md`.

| Tombol (jalan kaki) | Aksi |
|---|---|
| W/A/S/D atau panah | Jalan (arah mengikuti kamera) |
| Shift | Lari |
| Space | Lompat |
| F / E | Masuk mobil (saat dekat mobil) |
| R | Kembali ke titik awal |

| Tombol (di mobil) | Aksi |
|---|---|
| W/A/S/D atau panah | Setir |
| F | Keluar mobil (mobil direm otomatis dulu kalau masih melaju) |
| Shift | Boost |
| Space | Rem |
| E / Enter | Interaksi di berlian putih (papan TENTANG, PROYEK, KONTAK, BOWLING) |
| H | Klakson |
| R | Balikkan mobil / respawn |
| M | Suara on/off |
| Scroll | Zoom |

Di HP/touchscreen muncul tombol sentuh.

## Yang sudah ada

- **Karakter anak petani** (topi krem-teal dengan tunas, jaket lime, overall denim, sepatu bot, keranjang tomat, ember kayu) dibuat dari bentuk dasar dengan gaya flat yang sama seperti mobil. Rig sendi dengan animasi prosedural: idle bernapas dan berkedip, jalan, lari, lompat (squash & stretch, debu saat mendarat), dan sesekali mengepalkan tinju ke atas. Tekan F di dekat mobil: dia berjalan memutar ke pintu sopir, membuka pintu, memanjat masuk, lalu kendali dan kamera pindah ke mobil. Rumput tersibak di kakinya.
- **Siklus siang-malam** mengikuti jam asli: subuh, fajar, siang, sunset oranye, senja pink, malam biru. Warna tanah, rumput, daun, air, cahaya, dan lampu semuanya ikut berganti.
- **Jam di kiri atas** dengan ikon matahari/bulan yang bergerak di busur langit. Klik jam itu (atau tekan T) untuk membuka **Pengaturan**: ikuti jam asli atau atur jam manual pakai slider, kecepatan waktu (sampai 3600×), preset jam, kualitas grafis, dan toggle bayangan/bloom/tilt-shift/garis angin/FPS. Tombol [ dan ] menggeser jam ±1.
- **Vegetasi ala Bruno**: padang rumput berisi ±180 ribu helai yang bergoyang tertiup angin dan tersibak oleh mobil, serta pohon dan semak dari ±100 ribu daun kotak kecil (pink, oranye, kuning, putih, ungu, merah).
- **Danau organik** yang terpotong ke tanah (heightfield). Mobil bisa masuk ke air dangkal dan keluar lagi. Air punya pinggiran yang menyala dan goresan ombak.
- **Mobil monster truck**: ban besar berkembang (tread) yang berputar dan ikut bersuspensi, lampu LED kuning di atap dan bumper, lampu depan menyala di malam hari, lampu rem, asap knalpot, api pink saat boost, debu dari ban, dan cipratan air.
- **Gerakan halus**: fisika 120 Hz dengan interpolasi, setir yang halus, dan kamera yang sedikit melihat ke depan arah laju mobil.
- **Isi dunia**: plaza bertegel, jalan setapak, parkiran aspal, papan info beratap merah, bangku, lampu jalan, lentera, peti, tong, bowling, booth diner dan layar arcade neon, dermaga, ramp, batu, daun berguguran, garis angin, dan kunang-kunang.
- Tidak ada meteor.

## Langkah menuju versi "perfect" seperti Bruno Simon

Versi ini dibangun dari bentuk dasar (kotak, silinder, dan sejenisnya) di dalam kode. Portfolio Bruno terlihat jauh lebih rapi karena beberapa hal berikut:

1. **Model 3D dari Blender.** Mobil, lentera, papan, pohon, dan huruf dimodelkan sendiri dengan gaya low-poly, lalu diekspor ke `.glb` (dikompres dengan Draco/Meshopt) dan dimuat pakai `GLTFLoader`.
2. **Baked lighting.** Cahaya dan bayangan di-bake ke tekstur di Blender (Cycles), sehingga tampilannya terlihat seperti hasil render mahal tapi tetap ringan di browser. Untuk benda yang bergerak dipakai matcap atau shader khusus.
3. **Shader khusus.** Rumput, air, daun, dan efek partikel ditulis dengan GLSL, atau TSL (Three Shading Language) kalau pakai WebGPU. Versi terbaru portfolio Bruno sudah memakai WebGPU dan TSL.
4. **Mesin fisika.** Bruno sekarang memakai Rapier (WASM), yang lebih cepat dan stabil dibanding cannon-es. Bentuk tabrakan dibuat terpisah dari model visualnya (collider sederhana).
5. **Palet warna dan post-processing yang dirancang.** Gradasi warna, tone mapping, bloom yang dibatasi hanya untuk bagian yang menyala, dan kabut. Semuanya bisa diatur lewat panel debug `lil-gui`.
6. **Audio sungguhan.** Rekaman suara mesin dengan pitch yang mengikuti kecepatan, suara benturan dengan beberapa variasi, dan musik latar (misalnya dengan Howler.js).
7. **Detail kecil.** Jejak ban, debu, lentera dan huruf yang bisa diangkat lalu kembali ke posisinya, easter egg, papan skor, dan multiplayer (versi terbarunya menampilkan pemain lain secara real-time).
8. **Optimasi.** Instancing, geometri yang digabung, tekstur KTX2/Basis, level of detail (LOD), dan batas pixel ratio.
9. **Struktur proyek.** Vite + ES modules, dipecah per sistem: `World`, `Car`, `Physics`, `Sounds`, `Areas`, `Controls`.

Urutan pengerjaan yang paling masuk akal kalau ingin mendekati hasil Bruno: pindah ke Vite, lalu buat model di Blender, lalu bake lighting, lalu ganti ke Rapier, lalu tambah audio asli, lalu poles detailnya.
