// AMBIL NAMA DARI LINK
let params = new URLSearchParams(window.location.search);
let nama = params.get("Nathasya Indri");

if(nama){
  document.getElementById("title").innerText =
    "Maafin Aku Ya " + nama ";

  document.getElementById("text").innerText =
    "Hai " + nama + " klik ini dulu yaa...";
}

// TOMBOL MASUK
function masuk(){
  let audio = document.getElementById("bgm");

  audio.play().catch(() => {
    console.log("Autoplay diblok, tapi harusnya jalan setelah klik");
  });

  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";
}

// TEXT
let texts = [
  "Aku tau aku salah ",
  "Aku gak bermaksud gitu",
  "Aku cuma pengen kita baikan lagi ",
  "Aku kangen bercanda sama kamu ",
  "Aku bikin ini khusus buat kamu "
];

let index = 0;

function nextText(){
  document.getElementById("text").innerText = texts[index];
  document.getElementById("sound").play();
  index++;

  if(index >= texts.length){
    document.getElementById("game").style.display = "block";
  }
}

// MINI GAME MATCHA
let progress = 0;

function clickMatcha(){
  progress += 10;
  document.getElementById("progress").innerText = progress + "%";

  document.getElementById("matcha").style.transform =
    "scale(" + (1 + progress/200) + ")";

  if(progress >= 100){
    alert("Matcha spesial buat kamu selesai ");
    document.getElementById("choice").style.display = "block";
  }
}

// YES → WA
function yes(){
  alert("Makasih ya... aku janji ga bakal ngulangi ");

  let nomor = "628116502810"; // GANTI NOMOR KAMU
  let text = "iya aku maafin ";
  let url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(text);

  setTimeout(() => {
    window.location.href = url;
  }, 1500);
}

// NO BUTTON
let size = 1;

function no(){
  let btn = document.getElementById("noBtn");

  size -= 0.15;
  if(size < 0.3) size = 0.3;

  btn.style.transform = "scale(" + size + ")";
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 600 + "px";
  btn.style.left = Math.random() * 300 + "px";

  btn.innerText = "Jangan dong ";
}

// ANIMASI HATI
setInterval(() => {
  let heart = document.createElement("span");
  heart.innerHTML = "🧡";
  heart.style.left = Math.random() * 100 + "vw";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 500);
