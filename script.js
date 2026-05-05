document.addEventListener("DOMContentLoaded", function(){

// AMBIL NAMA
let params = new URLSearchParams(window.location.search);
let nama = params.get("nama");

if(nama){
  document.getElementById("title").innerText =
    "Maafin Aku Ya " + nama + " 🥺";

  document.getElementById("text").innerText =
    "Hai " + nama + " 🧡 klik ini dulu yaa...";
}

// MASUK
window.masuk = function(){
  // stop loading sound
  document.getElementById("loadingSound").pause();

  // play main music
  document.getElementById("bgm").play();

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

// GAME MATCHA
let progress = 0;

window.clickMatcha = function(){
  progress += 10;

  document.getElementById("progress").innerText = progress + "%";

  // animasi membesar
  document.getElementById("matcha").style.transform =
    "scale(" + (1 + progress/150) + ")";

  if(progress >= 100){
    alert("Matcha spesial buat kamu selesai ");
    document.getElementById("choice").style.display = "block";
  }
};

// YES → WA
window.yes = function(){
  let nomor = "628116502810";
  let text = "iya aku maafin ";
  let url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(text);
  window.location.href = url;
};

// NO BUTTON
let size = 1;

window.no = function(){
  let btn = document.getElementById("noBtn");

  size -= 0.15;
  if(size < 0.3) size = 0.3;

  btn.style.transform = "scale(" + size + ")";
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 600 + "px";
  btn.style.left = Math.random() * 300 + "px";

  btn.innerText = "Jangan dong ";
};

// HATI JATUH
setInterval(() => {
  let heart = document.createElement("span");
  heart.innerHTML = "🧡";
  heart.style.left = Math.random() * 100 + "vw";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 500);

});
