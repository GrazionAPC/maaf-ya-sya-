document.addEventListener('DOMContentLoaded', () => {
    const btnMasuk = document.getElementById('btn-masuk');
    const btnLanjut = document.getElementById('btn-lanjut');
    const mangkuk = document.getElementById('mangkuk-area');
    const musik = document.getElementById('musik');
    
    const layarAwal = document.getElementById('layar-awal');
    const kontenUtama = document.getElementById('konten-utama');
    const ceritaWrapper = document.getElementById('cerita-wrapper');
    const seksiGame = document.getElementById('seksi-game');
    const seksiAkhir = document.getElementById('seksi-akhir');

    const urlParams = new URLSearchParams(window.location.search);
    const namaUser = urlParams.get('nama') || "Nathasya";
    document.getElementById('judul').innerText = "Maaf ya, " + namaUser;

    // 1. Masuk
    btnMasuk.addEventListener('click', () => {
        layarAwal.style.display = 'none';
        kontenUtama.style.display = 'flex';
        musik.play().catch(() => {});
    });

    // 2. Transisi ke Game
    let step = 0;
    const pesan = [
        "Aku sadar aku salah.",
        "Aku ingin membuatkan matcha untukmu.",
        "Bantu aku mengaduknya sebentar."
    ];

    btnLanjut.addEventListener('click', () => {
        if (step < pesan.length) {
            document.getElementById('teks-cerita').innerText = pesan[step];
            step++;
        } else {
            ceritaWrapper.style.display = 'none';
            seksiGame.style.display = 'block';
        }
    });

    // 3. Game Logic
    let froth = 0;
    mangkuk.addEventListener('click', () => {
        froth += 4;
        if (froth > 100) froth = 100;

        document.getElementById('progress-bar').style.width = froth + "%";
        document.getElementById('persen').innerText = froth;
        document.getElementById('matcha-foam').style.height = froth + "%";

        if (froth >= 100) {
            setTimeout(() => {
                seksiGame.style.display = 'none';
                seksiAkhir.style.display = 'block';
            }, 500);
        }
    });

    // 4. Akhir
    document.getElementById('btn-iya').addEventListener('click', () => {
        window.location.href = "https://wa.me/628116502810?text=Iya, sudah dimaafkan.";
    });

    const btnNo = document.getElementById('btn-engga');
    btnNo.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        btnNo.style.position = 'fixed';
        btnNo.style.left = x + 'px';
        btnNo.style.top = y + 'px';
    });
});
