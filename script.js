document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen
    const layarAwal = document.getElementById('layar-awal');
    const kontenUtama = document.getElementById('konten-utama');
    const btnMasuk = document.getElementById('btn-masuk');
    const btnLanjut = document.getElementById('btn-lanjut');
    const pesanTeks = document.getElementById('pesan-teks');
    const musik = document.getElementById('musik');
    const judul = document.getElementById('judul');

    // Ambil nama dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const namaUser = urlParams.get('nama') || "Nathasya";
    judul.innerText = `Maafin Aku Ya, ${namaUser} `;

    // 1. Fungsi Tombol Masuk
    btnMasuk.onclick = () => {
        layarAwal.style.display = 'none';
        kontenUtama.style.display = 'flex';
        musik.play().catch(() => console.log("Musik diputar setelah interaksi"));
        mulaiHujanHati();
    };

    // 2. Konten Cerita
    let step = 0;
    const cerita = [
        "Aku sadar aku salah ",
        "Gak ada niat buat bikin kamu sedih",
        "Maafin aku ya, janji gak ulangi lagi ",
        "Main game bentar yuk buat buktiin!"
    ];

    btnLanjut.onclick = () => {
        if (step < cerita.length) {
            pesanTeks.innerText = cerita[step];
            step++;
        } else {
            btnLanjut.style.display = 'none';
            document.getElementById('seksi-game').style.display = 'block';
            mulaiGame();
        }
    };

    // 3. Game Matcha
    let skor = 0;
    let isHijau = false;

    function mulaiGame() {
        const bar = document.getElementById('progress-bar');
        setInterval(() => {
            const randomWidth = Math.floor(Math.random() * 100);
            bar.style.width = randomWidth + "%";
            if (randomWidth > 75) {
                bar.style.backgroundColor = "#2ecc71"; // Hijau
                isHijau = true;
            } else {
                bar.style.backgroundColor = "#e74c3c"; // Merah
                isHijau = false;
            }
        }, 800);

        document.getElementById('klik-area').onclick = () => {
            if (isHijau) {
                skor += 25;
            } else {
                skor -= 10;
                if (skor < 0) skor = 0;
            }
            document.getElementById('info-skor').innerText = "Skor: " + skor;
            if (skor >= 100) {
                document.getElementById('seksi-game').style.display = 'none';
                document.getElementById('seksi-akhir').style.display = 'block';
            }
        };
    }

    // 4. Tombol Akhir
    document.getElementById('btn-iya').onclick = () => {
        window.location.href = `https://wa.me/628116502810?text=Iya aku maafin kamu, ${namaUser} `;
    };

    const btnNo = document.getElementById('btn-engga');
    const lari = () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        btnNo.style.position = 'fixed';
        btnNo.style.left = x + 'px';
        btnNo.style.top = y + 'px';
    };
    btnNo.onmouseenter = lari;
    btnNo.onclick = lari;

    // 5. Animasi Hati
    function mulaiHujanHati() {
        setInterval(() => {
            const h = document.createElement("div");
            h.className = "hati";
            h.innerHTML = "🧡";
            h.style.left = Math.random() * 100 + "vw";
            document.getElementById('wadah-hati').appendChild(h);
            setTimeout(() => h.remove(), 4000);
        }, 600);
    }
});
