// LOADING
setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";
}, 3000);

// TEXT
let texts = [
  "Aku tau aku salah",
  "Aku gak bermaksud gitu",
  "Aku cuma pengen kita baikan lagi",
  "Aku bahkan bikin ini buat kamu"
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
  progress += 20;
  document.getElementById("progress").innerText = progress + "%";

  if(progress >= 100){
    alert("Matcha selesai dibuat buat kamu");
    document.getElementById("choice").style.display = "block";
  }
}

// YES BUTTON → WA
function yes(){
  let nomor = "628116502810"; // GANTI NOMOR KAMU
  let text = "iya aku maafin";
  let url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(text);
  window.location.href = url;
}

// NO BUTTON (kabur + mengecil)
let size = 1;

function no(){
  let btn = document.getElementById("noBtn");

  size -= 0.1;
  btn.style.transform = "scale(" + size + ")";

  btn.style.position = "absolute";
  btn.style.top = Math.random() * 500 + "px";
  btn.style.left = Math.random() * 300 + "px";
}
