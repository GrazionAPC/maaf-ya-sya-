document.addEventListener('DOMContentLoaded', () => {
    const layarAwal = document.getElementById('layar-awal');
    const kontenUtama = document.getElementById('konten-utama');
    const btnMasuk = document.getElementById('btn-masuk');
    const btnLanjut = document.getElementById('btn-lanjut');
    const pesanTeks = document.getElementById('pesan-teks');
    const musik = document.getElementById('musik');
    const judul = document.getElementById('judul');

    // Ambil nama dari URL (Contoh: index.html?nama=Nathasya)
    const urlParams = new URLSearchParams(window.location.search);
    const namaUser = urlParams.get('nama') || "Cantik";
    judul.innerText = `Maafin Aku Ya, ${namaUser} 🥺`;

    // 1. Fungsi Tombol Masuk
    btnMasuk.onclick = () => {
        layarAwal.style.display = 'none';
        kontenUtama.style.display = 'flex';
        musik.play().catch(() => console.log("Musik butuh interaksi user"));
        mulaiHujanHati();
    };

    // 2. Konten Cerita
    let step = 0;
    const cerita = [
        "Aku sadar aku salah banget.. 😔",
        "Gak ada niat buat bikin kamu sedih..",
        "Maafin aku ya, janji gak ulangi lagi 🧡",
        "Sebagai tanda maaf, aku buatin sesuatu..",
        "Bantu aku aduk Matchanya yuk! 🍵"
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

    // 3. Mini Game: Aduk Matcha
    function mulaiGame() {
        const mangkuk = document.getElementById('mangkuk-matcha');
        const air = document.getElementById('air-matcha');
        const pengaduk = document.getElementById('pengaduk');
        const infoSkor = document.getElementById('info-skor');
        let skor = 0;

        mangkuk.onclick = () => {
            if (skor < 100) {
                skor += 5;
                
                // Efek visual pengaduk
                pengaduk.classList.add('kocok');
                setTimeout(() => pengaduk.classList.remove('kocok'), 200);

                // Update tinggi air & warna
                air.style.height = skor + "%";
                if (skor > 60) air.style.backgroundColor = "#b7d968"; 

                infoSkor.innerText = `Tingkat Aduk: ${skor}%`;

                if (skor >= 100) {
                    setTimeout(() => {
                        document.getElementById('seksi-game').style.display = 'none';
                        document.getElementById('seksi-akhir').style.display = 'block';
                        pesanTeks.innerText = "Matchanya sudah jadi! Diminum ya.. 🍵";
                    }, 600);
                }
            }
        };
    }

    // 4. Tombol Akhir (WA)
    document.getElementById('btn-iya').onclick = () => {
        const pesanWA = `Iya aku maafin kamu kok 🧡 Matchanya enak!`;
        window.location.href = `https://wa.me/628116502810?text=${encodeURIComponent(pesanWA)}`;
    };

    // Fitur tombol "Engga" yang lari-larian
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

    // 5. Animasi Hati Jatuh
    function mulaiHujanHati() {
        setInterval(() => {
            const h = document.createElement("div");
            h.className = "hati";
            h.innerHTML = "🧡";
            h.style.left = Math.random() * 100 + "vw";
            h.style.animationDuration = (Math.random() * 2 + 2) + "s";
            document.getElementById('wadah-hati').appendChild(h);
            setTimeout(() => h.remove(), 4000);
        }, 600);
    }
});
