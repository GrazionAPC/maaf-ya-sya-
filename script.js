document.addEventListener("DOMContentLoaded", function(){

// NAMA DARI URL
let params = new URLSearchParams(window.location.search);
let nama = params.get("nama");

if(nama){
  document.getElementById("title").innerText =
    "Maafin Aku Ya " + nama ";

  document.getElementById("text").innerText =
    "Hai " + nama + " 🧡 klik mulai ya...";
}

// MASUK
window.masuk = function(){
  document.getElementById("loadingSound").pause();
  document.getElementById("bgm").play();

  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";
};

// STORY TEXT
let texts = [
  "Aku tau aku salah ",
  "Aku gak bermaksud gitu",
  "Aku cuma pengen kita baikan lagi ",
  "Aku kangen ngobrol becanda dan main sama kamu ",
  "Aku bikin ini khusus buat kamu "
];

let i = 0;

window.nextText = function(){
  document.getElementById("text").innerText = texts[i];
  document.getElementById("sound").play();
  i++;

  if(i >= texts.length){
    document.getElementById("game").style.display = "block";
    startGame();
  }
};

// ULTIMATE GAME (TIMING CHALLENGE)
let score = 0;
let active = false;

function startGame(){
  setInterval(() => {
    let bar = document.getElementById("bar");
    let width = Math.floor(Math.random() * 100);

    bar.style.width = width + "%";
    active = true;

    setTimeout(() => {
      active = false;
    }, 700);
  }, 1200);
}

document.getElementById("barArea").onclick = function(){
  if(active){
    score += 10;
    document.getElementById("score").innerText = "Score: " + score;

    if(score >= 100){
      document.getElementById("choice").style.display = "block";
      alert("Matcha berhasil dibuat sempurna 🧡");
    }
  } else {
    score -= 5;
    if(score < 0) score = 0;
    document.getElementById("score").innerText = "Score: " + score;
  }
};

// YES
window.yes = function(){
  let nomor = "628116502810";
  let text = "iya aku maafin ";
  window.location.href =
    "https://wa.me/" + nomor + "?text=" + encodeURIComponent(text);
};

// NO (LUCU + SUSAH DIKLIK)
let size = 1;

window.no = function(){
  let btn = document.getElementById("noBtn");

  size -= 0.2;
  if(size < 0.2) size = 0.2;

  btn.style.transform = "scale(" + size + ")";
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 500 + "px";
  btn.style.left = Math.random() * 300 + "px";

  btn.innerText = "Jangan gitu ";
};

// HEARTS
setInterval(() => {
  let h = document.createElement("span");
  h.innerHTML = "🧡";
  h.style.left = Math.random() * 100 + "vw";
  document.getElementById("hearts").appendChild(h);

  setTimeout(() => h.remove(), 5000);
}, 400);

});
