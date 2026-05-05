/* TARUH DI PALING ATAS SCRIPT.JS */

window.masuk = function() {
    console.log("Tombol ditekan!"); // Cek di console (F12)
    const loading = document.getElementById("loading");
    const main = document.getElementById("main");
    
    if (loading && main) {
        loading.style.setProperty("display", "none", "important");
        main.style.setProperty("display", "flex", "important");
        
        // Putar musik jika ada
        let sfx = document.getElementById("sound");
        if (sfx) sfx.play().catch(() => {});
    }
};

/* SISANYA BARU DI DALAM DOMCONTENTLOADED */
document.addEventListener("DOMContentLoaded", function () {
    // ... kode yang lain (nama, game, heart, dll)
});

/* 1. FUNGSI GLOBAL (Agar bisa dipanggil onclick dari HTML) */
window.masuk = function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("main").style.display = "flex";
    
    // Auto-play musik (beberapa browser memblokir ini sebelum ada interaksi)
    let sfx = document.getElementById("sound");
    sfx.play().catch(() => console.log("Musik akan diputar setelah interaksi"));
};

/* 2. LOGIKA SETELAH DOM SIAP */
document.addEventListener("DOMContentLoaded", function () {
    let params = new URLSearchParams(window.location.search);
    let nama = params.get("nama") || "Kamu";

    document.getElementById("title").innerText = "Maafin Aku Ya " + nama ";
    document.getElementById("text").innerText = "Hai " + nama + " 🧡 klik mulai ya...";

    // Cerita
    let texts = [
        "Aku tau aku salah, maaf ya",
        "Aku gak bermaksud gitu",
        "Aku cuma pengen kita baikan lagi",
        "Aku rindu main, ngobrol, bercanda sama kamu",
        "Maafin aku ya?"
    ];
    let i = 0;

    window.nextText = function () {
        if (i < texts.length) {
            document.getElementById("text").innerText = texts[i];
            
            // Putar sound setiap klik
            let sfx = document.getElementById("sound");
            sfx.currentTime = 0;
            sfx.play().catch(()=>{});
            i++;
        } else {
            // Sembunyikan tombol mulai, tampilkan game
            document.getElementById("btnMulai").style.display = "none";
            document.getElementById("game").style.display = "block";
        }
    };

    /* ===== LOGIKA GAME ===== */
    let score = 0;
    let isGreen = false;

    setInterval(() => {
        let bar = document.getElementById("bar");
        let randomWidth = Math.floor(Math.random() * 100);
        
        bar.style.width = randomWidth + "%";
        
        // Jika bar di atas 70%, anggap area "hijau"
        if (randomWidth > 70) {
            bar.style.background = "#4CAF50"; // Hijau
            isGreen = true;
        } else {
            bar.style.background = "#ff4d4d"; // Merah
            isGreen = false;
        }
    }, 800);

    document.getElementById("barArea").onclick = function () {
        if (isGreen) {
            score += 20;
        } else {
            score -= 10;
            if (score < 0) score = 0;
        }

        document.getElementById("score").innerText = "Score: " + score;

        if (score >= 100) {
            document.getElementById("game").style.display = "none";
            document.getElementById("choice").style.display = "block";
        }
    };

    /* ===== TOMBOL IYA ===== */
    window.yes = function () {
        let nomor = "628116502810";
        let pesan = "Iya aku maafin kamu kok ";
        window.location.href = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);
    };

    /* ===== TOMBOL ENGGA (LARI) ===== */
    let noScale = 1;
    window.no = function () {
        let btn = document.getElementById("noBtn");
        
        // Mengecil
        noScale -= 0.1;
        if (noScale < 0.3) noScale = 0.3;
        
        btn.style.transform = `scale(${noScale})`;
        
        // Pindah posisi acak
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 50);
        
        btn.style.position = "fixed";
        btn.style.left = x + "px";
        btn.style.top = y + "px";
    };

    /* ===== EFEK HATI JATUH ===== */
    setInterval(() => {
        const heart = document.createElement("span");
        heart.innerHTML = "🧡";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";
        heart.style.opacity = Math.random();
        
        document.getElementById("hearts").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 500);
});
