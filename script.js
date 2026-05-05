document.addEventListener("DOMContentLoaded", function(){

// AMBIL NAMA DARI LINK
let params = new URLSearchParams(window.location.search);
let nama = params.get("nama");

if(nama){
  document.getElementById("title").innerText =
    "Maafin Aku Ya " + nama + " 🥺";

  document.getElementById("text").innerText =
    "Hai " + nama + " klik ini dulu yaa...";
}

// TOMBOL MASUK
window.masuk = function(){
  let audio = document.getElementById("bgm");

  audio.play().catch(() => {
    console.log("Audio gagal autoplay");
  });

  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";
};

// TEXT
let texts = [
  "Aku tau aku salah ",
  "Aku gak bermaksud gitu ",
  "Aku cuma pengen kita baikan lagi ",
  "Aku kangen bercanda sama kamu ",
  "Aku bikin ini khusus buat kamu "
];

let index = 0;

window.nextText = function(){
  document.getElementById("text").innerText = texts[index];
  document.getElementById("sound").play();
  index++;

  if(index >= texts.length){
    document.getElementById("game").style.display = "block";
  }
};

// MINI GAME
let progress = 0;

window.clickMatcha = function(){
  progress += 10;
  document.getElementById("progress").innerText = progress + "%";

  if(progress >= 100){
    alert("Matcha selesai 🧡");
    document.getElementById("choice").style.display = "block";
  }
};

// YES
window.yes = function(){
  let nomor = "628116502810";
  let text = "iya aku maafin 🧡";
  let url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(text);
  window.location.href = url;
};

// NO
let size = 1;

window.no = function(){
  let btn = document.getElementById("noBtn");

  size -= 0.1;
  if(size < 0.3) size = 0.3;

  btn.style.transform = "scale(" + size + ")";
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 600 + "px";
  btn.style.left = Math.random() * 300 + "px";
};

});
