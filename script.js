document.addEventListener("DOMContentLoaded", function () {

let params = new URLSearchParams(window.location.search);
let nama = params.get("nama");

if (nama) {
  document.getElementById("title").innerText =
    "Maafin Aku Ya " + nama + " 🥺";

  document.getElementById("text").innerText =
    "Hai " + nama + " 🧡 klik mulai ya...";
}

/* =========================
   MASUK BUTTON
========================= */
window.masuk = function () {
  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";

  // PLAY MUSIC UTAMA
  let bgm = document.getElementById("bgm");
  bgm.play().catch(() => {});
};

/* =========================
   STORY TEXT + SOUND
========================= */
let texts = [
  "Aku tau aku salah, maaf ya",
  "Aku gak bermaksud gitu",
  "Aku cuma pengen kita baikan lagi",
  "Aku kangen ngobrol, bercanda, dan main sama kamu",
  "Aku bikin ini khusus buat kamu"
];

let i = 0;

window.nextText = function () {
  document.getElementById("text").innerText = texts[i];

  // SOUND EFFECT
  let sfx = document.getElementById("sound");
  sfx.currentTime = 0;
  sfx.play();

  i++;

  if (i >= texts.length) {
    document.getElementById("game").style.display = "block";
  }
};

/* =========================
   MINI GAME MATCHA (REFLEX)
========================= */
let score = 0;
let active = false;

// random bar muncul
setInterval(() => {
  let bar = document.getElementById("bar");
  let val = Math.floor(Math.random() * 100);

  bar.style.width = val + "%";
  active = true;

  setTimeout(() => {
    active = false;
  }, 600);

}, 1100);

/* klik bar */
window.clickMatcha = function () {
  if (active) {
    score += 10;
  } else {
    score -= 5;
    if (score < 0) score = 0;
  }

  document.getElementById("score").innerText = "Score: " + score;

  if (score >= 100) {
    document.getElementById("choice").style.display = "block";
    alert("Matcha berhasil dibuat sempurna 🧡");
  }
};

/* =========================
   YES (WHATSAPP)
========================= */
window.yes = function () {
  let nomor = "628116502810"; // ganti kalau perlu
  let text = "iya aku maafin 🧡";

  window.location.href =
    "https://wa.me/" + nomor + "?text=" + encodeURIComponent(text);
};

/* =========================
   NO BUTTON (KABUR + KECIL)
========================= */
let size = 1;

window.no = function () {
  let btn = document.getElementById("noBtn");

  size -= 0.15;
  if (size < 0.2) size = 0.2;

  btn.style.transform = "scale(" + size + ")";
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 500 + "px";
  btn.style.left = Math.random() * 300 + "px";

  btn.innerText = "Jangan dong 😭";
};

/* =========================
   HEART EFFECT
========================= */
setInterval(() => {
  let h = document.createElement("span");
  h.innerHTML = "🧡";
  h.style.left = Math.random() * 100 + "vw";

  document.getElementById("hearts").appendChild(h);

  setTimeout(() => h.remove(), 5000);
}, 400);

});
