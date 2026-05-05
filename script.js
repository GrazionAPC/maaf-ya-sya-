document.addEventListener('DOMContentLoaded', () => {
    const btnMasuk = document.getElementById('btn-masuk');
    const btnLanjut = document.getElementById('btn-lanjut');
    const mangkuk = document.getElementById('mangkuk-area');
    const musik = document.getElementById('musik');

    // Ambil nama
    const urlParams = new URLSearchParams(window.location.search);
    const namaUser = urlParams.get('nama') || "Nathasya";
    document.getElementById('judul').innerText = `Maafin Aku Ya, ${namaUser} `;

    // 1. Masuk & Play Sound
    btnMasuk.onclick = () => {
        document.getElementById('layar-awal').style.display = 'none';
        document.getElementById('konten-utama').style.display = 'flex';
        musik.play();
        mulaiHujanHati();
    };

    // 2. Story Logic
    let step = 0;
    const cerita = [
        "Aku tau aku salah, maaf ya",
        "Sebagai permintaan maaf, aku mau buatin Matcha kesukaanmu",
        "Tapi bantuin aku ngaduk ya? Biar spesial!"
    ];

    btnLanjut.onclick = () => {
        if (step < cerita.length) {
            document.getElementById('teks-cerita').innerText = cerita[step];
            step++;
        } else {
            document.getElementById('cerita-wrapper').style.display = 'none';
            document.getElementById('seksi-game').style.display = 'block';
        }
    };

    // 3. Matcha Game Logic
    let froth = 0;
    mangkuk.onclick = () => {
        froth += 5;
        if (froth > 100) froth = 100;

        // Update Visual
        document.getElementById('progress-bar').style.width = froth + "%";
        document.getElementById('persen').innerText = froth;
        document.getElementById('matcha-foam').style.height = (froth * 0.8) + "%";
        
        // Whisk effect
        const whisk = document.getElementById('whisk');
        whisk.style.transform = `translateX(${Math.random() * 20 - 10}px) rotate(${Math.random() * 20 - 10}deg)`;

        if (froth >= 100) {
            setTimeout(() => {
                document.getElementById('seksi-game').style.display = 'none';
                document.getElementById('seksi-akhir').style.display = 'block';
            }, 500);
        }
    };

    // 4. Tombol Akhir
    document.getElementById('btn-iya').onclick = () => {
        window.location.href = `https://wa.me/628116502810?text=Iya aku maafin kamu, ${namaUser}. Matchanya enak, makasih ya, aku maafin kamu`;
    };

    const btnNo = document.getElementById('btn-engga');
    const lari = () => {
        btnNo.style.position = 'fixed';
        btnNo.style.left = Math.random() * 80 + "vw";
        btnNo.style.top = Math.random() * 80 + "vh";
    };
    btnNo.onmouseenter = lari;
    btnNo.onclick = lari;

    function mulaiHujanHati() {
        setInterval(() => {
            const h = document.createElement("div");
            h.className = "hati"; h.innerHTML = "🧡";
            h.style.left = Math.random() * 100 + "vw";
            document.getElementById('wadah-hati').appendChild(h);
            setTimeout(() => h.remove(), 4000);
        }, 600);
    }
});
