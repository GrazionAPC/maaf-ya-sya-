document.addEventListener("DOMContentLoaded", function(){

let params = new URLSearchParams(window.location.search);
let nama = params.get("nama");

if(nama){
  document.getElementById("title").innerText =
    "Maafin Aku Ya " + nama + ";

  document.getElementById("text").innerText =
    "Hai " + nama + " 🧡 klik untuk lanjut...";
}

/* MASUK */
window.masuk = function(){

  // STOP LOADING SOUND
  document.getElementById("loadingSound").play();

  // START MAIN MUSIC
  document.getElementById("bgm").play();

  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";
};

/* TEXT */
let texts = [
  "Aku tau aku salah ",
  "Aku gak bermaksud gitu",
  "Aku cuma pengen kita baik lagi ",
  "Aku kangen becanda dan main sama kamu ",
  "Aku serius bikin ini buat minta maaf sama kamu "
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

/* MATCHA GAME ULTIMATE */
let progress = 0;

window.clickMatcha = function(){

  progress += Math.floor(Math.random() * 15) + 5;

  if(progress > 100) progress = 100;

  document.getElementById("progress").innerText = progress + "%";
  document.getElementById("fill").style.width = progress + "%";

  document.getElementById("matcha").style.transform =
    "scale(" + (1 + progress/180) + ")";

  if(progress === 100){
    alert("🎉 MATCHA SUPER SPESIAL SELESAI!");
    document.getElementById("choice").style.display = "block";
  }
};

/* YES */
window.yes = function(){
  let nomor = "628116502810";
  let text = "iya aku maafin ";
  let url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(text);

  window.location.href = url;
};

/* NO BUTTON ULTIMATE */
let size = 1;

window.no = function(){
  let btn = document.getElementById("noBtn");

  size -= 0.2;
  if(size < 0.2) size = 0.2;

  btn.style.transform = "scale(" + size + ")";
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 600 + "px";
  btn.style.left = Math.random() * 300 + "px";

  btn.innerText = "Jangan dong ";
};

/* HATI JATUH */
setInterval(() => {
  let h = document.createElement("span");
  h.innerHTML = "🧡";
  h.style.left = Math.random() * 100 + "vw";
  document.getElementById("hearts").appendChild(h);

  setTimeout(() => h.remove(), 5000);
}, 400);

});
