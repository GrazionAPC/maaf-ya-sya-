document.addEventListener('DOMContentLoaded', () => {
    const layarAwal = document.getElementById('layar-awal');
    const kontenUtama = document.getElementById('konten-utama');
    const btnMasuk = document.getElementById('btn-masuk');
    const btnLanjut = document.getElementById('btn-lanjut');
    const pesanTeks = document.getElementById('pesan-teks');
    const musik = document.getElementById('musik');
    const judul = document.getElementById('judul');

    const urlParams = new URLSearchParams(window.location.search);
    const namaUser = urlParams.get('nama') || "Kak";
    judul.innerText = `Maafin Aku Ya, ${namaUser}`;

    btnMasuk.onclick = () => {
        layarAwal.style.display = 'none';
        kontenUtama.style.display = 'flex';
        musik.play().catch(() => {});
        mulaiHujanHati();
    };

    let step = 0;
    const cerita = [
        "Aku minta maaf ya Kak atas kesalahanku kemarin",
        "Nggak ada maksud buat bikin Kau marah",
        "Semoga di maafin ya.",
        "Sebagai tanda maaf, aku mau ngasih matcha",
        "Bantu aduk sebentar ya."
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

    function mulaiGame() {
        const mangkuk = document.getElementById('mangkuk-matcha');
        const air = document.getElementById('air-matcha');
        const pengaduk = document.getElementById('pengaduk');
        const infoSkor = document.getElementById('info-skor');
        let skor = 0;

        mangkuk.onclick = () => {
            if (skor < 100) {
                skor += 10;
                pengaduk.classList.add('kocok');
                setTimeout(() => pengaduk.classList.remove('kocok'), 200);
                air.style.height = skor + "%";
                infoSkor.innerText = `Proses: ${skor}%`;

                if (skor >= 100) {
                    setTimeout(() => {
                        document.getElementById('seksi-game').style.display = 'none';
                        document.getElementById('seksi-akhir').style.display = 'block';
                        pesanTeks.innerText = "Matchanya sudah jadi.";
                    }, 500);
                }
            }
        };
    }

    document.getElementById('btn-iya').onclick = () => {
        const pesanWA = `Iya, sudah dimaafkan kok. Terimakasih ya.`;
        window.location.href = `https://wa.me/628116502810?text=${encodeURIComponent(pesanWA)}`;
    };

    const btnNo = document.getElementById('btn-engga');
    btnNo.onmouseenter = () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        btnNo.style.position = 'fixed';
        btnNo.style.left = x + 'px';
        btnNo.style.top = y + 'px';
    };

    function mulaiHujanHati() {
        setInterval(() => {
            const h = document.createElement("div");
            h.className = "hati";
            h.innerHTML = "🍵"; // Ganti jadi emoji matcha biar lebih sopan
            h.style.left = Math.random() * 100 + "vw";
            document.getElementById('wadah-hati').appendChild(h);
            setTimeout(() => h.remove(), 4000);
        }, 800);
    }
});
