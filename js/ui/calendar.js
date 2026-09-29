// Calendar panel (K, the date under the clock, or the calendar stand in the Balai gazebo): one season per page,
// 7 x 4 grid with today, festivals and weather (known for past days, today and tomorrow = the forecast),
// plus what the season does to the world and the character. Data: systems/calendar.js (calendar.json).
import { $ } from '../engine/util.js';
import { on } from '../engine/events.js';
import { sfx } from '../engine/audio.js';
import { DEBUG } from '../game/config.js';
import { CAL, today, dateOf, eventsOn, fmtDate, setDay } from '../systems/calendar.js';
import { RULES } from '../systems/stats.js';
import { ui, openModal, modalOpen, toast } from './ui.js';

const N = CAL.daysPerSeason;
let page = 0;   // season index shown

// the conditions a season (or its weathers) can trigger, as chips
function seasonEffects(s) {
  const flags = new Set([...(s.env || []), ...(s.envNight || []), ...(s.envNoon || []), ...Object.keys(s.weather || {}).flatMap(w => CAL.weathers[w]?.env || [])]);
  return RULES.conditions.filter(c => c.env && flags.has(c.env))
    .map(c => `<span class="dc-tag ${c.kind}" title="${c.desc}">${c.icon || ''} ${c.name}</span>`).join('') || '<span class="dc-tag none">tidak ada</span>';
}
function html() {
  const now = today(), s = CAL.seasons[page], yearStart = (now.year - 1) * N * CAL.seasons.length, first = yearStart + page * N;
  const cells = [];
  for (let i = 0; i < N; i++) {
    const d = dateOf(first + i), past = d.index < now.index, isToday = d.index === now.index, known = d.index <= now.index + 1;
    const ev = eventsOn(s.id, i + 1);
    cells.push(`<div class="cal-day${isToday ? ' today' : ''}${past ? ' past' : ''}${ev.length ? ' event' : ''}${DEBUG ? ' jump' : ''}" data-day="${d.index}" title="${d.weekday}, ${s.name} ${i + 1}${ev.map(e => ' · ' + e.name).join('')}${known ? ' · ' + d.weather.name : ''}${DEBUG ? ' · klik: pindah ke tanggal ini' : ''}">
      <b>${i + 1}</b>${known ? `<i class="cal-w">${d.weather.icon}</i>` : ''}${ev.map(e => `<span class="cal-ev">${e.icon} ${e.name}</span>`).join('')}</div>`);
  }
  const tomorrow = dateOf(now.index + 1);
  const list = CAL.events.filter(e => e.season === s.id).map(e => `<li>${e.icon} <b>${e.day}</b> ${e.name}</li>`).join('');
  return `<div class="calendar" style="--sc:${s.color}">
    <div class="cal-head"><h2>${s.icon} ${s.name}</h2><span>Tahun ${now.year}</span></div>
    <div class="dc-tabs">${CAL.seasons.map((x, i) => `<button data-page="${i}" class="${i === page ? 'on' : ''}">${x.icon} ${x.short}</button>`).join('')}</div>
    ${DEBUG ? '<p class="cal-demo">Mode demo: klik tanggal mana pun untuk pindah ke hari itu.</p>' : ''}
    <p class="cal-now">Hari ini: <b>${now.weekday}, ${fmtDate(now)}</b> · ${now.weather.icon} ${now.weather.name} · Besok: ${tomorrow.weather.icon} ${tomorrow.weather.name}</p>
    <div class="cal-grid">${CAL.weekdays.map(w => `<div class="cal-wd">${w}</div>`).join('')}${cells.join('')}</div>
    <div class="cal-info">
      <div><h4>Musim ini</h4><p>${s.desc}</p><div class="dc-tags">${seasonEffects(s)}</div>
        <p class="cal-weather">Cuaca: ${Object.entries(s.weather || {}).map(([w, p]) => `${CAL.weathers[w].icon} ${CAL.weathers[w].name} ${Math.round(p * 100)}%`).join(' · ')}</p></div>
      <div><h4>Acara</h4><ul class="cal-list">${list || '<li>—</li>'}</ul></div>
    </div>
  </div>`;
}
const render = () => openModal(html(), onClick);
function onClick(e) {
  const day = DEBUG && e.target.closest('.cal-day[data-day]');
  if (day) {   // demo: jump to that date (season look, weather and wild items follow on the next frame)
    setDay(+day.dataset.day); sfx.pop();
    toast(`Pindah ke ${fmtDate(dateOf(+day.dataset.day))}`);
    render(); return;
  }
  const b = e.target.closest('button[data-page]');
  if (!b) return;
  page = +b.dataset.page; sfx.step(0.5); render();
}
export function openCalendar() {
  if (!ui.started || modalOpen()) return;
  page = today().seasonIndex; sfx.pop(); render();
}

// date line under the clock (top-left); clicking it opens the calendar instead of the time settings
let lastDate = '';
export function updateDateUI() {
  const d = today(), txt = `${d.season.icon} ${d.weekday}, ${fmtDate(d)} ${d.weather.icon}`;
  if (txt !== lastDate) { lastDate = txt; $('clockDate').textContent = txt; $('clockDate').title = `${d.season.name} hari ke-${d.day} · ${d.weather.name} · klik: kalender (K)`; }
}
export function initCalendarUI() {
  $('clockDate').onclick = (e) => { e.stopPropagation(); openCalendar(); };
  addEventListener('keydown', (e) => {
    if (e.repeat || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (e.code === 'KeyK') openCalendar();
  });
  // morning news: new day, new season, festivals
  on('calendar:day', (d) => {
    toast(`${d.season.icon} ${d.weekday}, ${fmtDate(d)} · ${d.weather.icon} ${d.weather.name}`);
    for (const ev of eventsOn(d.season.id, d.day)) toast(`${ev.icon} Hari ini: ${ev.name}!`);
  });
  on('calendar:season', (d) => toast(`<b style="color:${d.season.color}">${d.season.icon} ${d.season.name} dimulai!</b>`));
}
