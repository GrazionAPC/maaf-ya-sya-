document.addEventListener("DOMContentLoaded", function(){

let params = new URLSearchParams(window.location.search);
let nama = params.get("nama");

if(nama){
  document.getElementById("title").innerText =
    "Maafin Aku Ya " + nama ";

  document.getElementById("text").innerText =
    "Hai Kak " + nama + " klik mulai ya...";
}

/* MASUK (FIX MUSIK WAJIB CLICK) */
window.masuk = function(){

  let sound = document.getElementById("loadingSound");

  // stop loading sound
  sound.pause();
  sound.currentTime = 0;

  // masuk ke main
  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";

  // play music utama
  let bgm = document.getElementById("bgm");
  bgm.play().catch(()=>{});
};

/* TEXT */
let texts = [
  "Aku salah, aku minta maaf ya ",
  "Aku gak bermaksud gitu",
  "Aku cuma pengen kita baikan lagi ",
  "Aku kangen ngobrol, becanda, dan main sama kamu ",
  "Aku bikin ini khusus buat minta maaf "
];

let i = 0;

window.nextText = function(){
  document.getElementById("text").innerText = texts[i];
  document.getElementById("sound").play();
  i++;

  if(i >= texts.length){
    document.getElementById("game").style.display = "block";
  }
};

/* GAME SIMPLE FIXED */
let score = 0;
let active = false;

setInterval(() => {
  let bar = document.getElementById("bar");
  let val = Math.floor(Math.random() * 100);
  bar.style.width = val + "%";
  active = true;

  setTimeout(() => active = false, 600);
}, 1200);

document.getElementById("barArea").onclick = function(){
  if(active){
    score += 10;
    document.getElementById("score").innerText = "Score: " + score;

    if(score >= 100){
      document.getElementById("choice").style.display = "block";
      alert("Matcha selesai 🧡");
    }
  }
};

/* YES */
window.yes = function(){
  let nomor = "628116502810";
  window.location.href =
    "https://wa.me/" + nomor + "?text=iya%20aku%20maafin%20🧡";
};

/* NO */
let size = 1;

window.no = function(){
  let btn = document.getElementById("noBtn");

  size -= 0.15;
  if(size < 0.3) size = 0.3;

  btn.style.transform = "scale(" + size + ")";
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 500 + "px";
  btn.style.left = Math.random() * 300 + "px";
};

/* HEARTS */
setInterval(() => {
  let h = document.createElement("span");
  h.innerHTML = "🧡";
  h.style.left = Math.random() * 100 + "vw";
  document.getElementById("hearts").appendChild(h);

  setTimeout(() => h.remove(), 5000);
}, 400);

});
