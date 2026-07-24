document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Utility: Bootstrap Initializers ---
    const initBootstrapComponents = () => {
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));
        document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new bootstrap.Popover(el));
    };

    // --- 2. Navbar Scroll Effect ---
    const handleNavbarScroll = () => {
        const nav = document.getElementById('mainNavbar');
        window.addEventListener('scroll', () => {
            if (nav) {
                nav.classList.toggle('scrolled', window.scrollY > 50);
            }
        });
    };

    // --- 3. Injeksi Paragraf ---
    const injectWishes = () => {
        const container = document.getElementById('wish-text');
        if (!container) return;

        const wishes = [
            "Selamat ulang tahun untuk seseorang yang sangat berharga. Hari ini adalah hari yang begitu istimewa, karena pada hari inilah lahir seorang perempuan yang membawa begitu banyak warna, kebahagiaan, dan kehangatan bagi dunia di sekitarnya.",
            "Ada begitu banyak cerita, perjuangan, tawa, air mata, harapan, dan doa yang telah mengiringi perjalananmu hingga sampai di titik ini. Aku percaya semua pengalaman itu telah membentukmu menjadi pribadi yang lebih kuat, lebih dewasa, dan lebih luar biasa dari sebelumnya.",
            "Aku ingin mengucapkan terima kasih karena telah menjadi dirimu sendiri. Terima kasih atas setiap senyuman yang pernah kamu berikan, atas setiap kebaikan yang mungkin tanpa sadar telah membuat hari orang lain menjadi lebih indah.",
            "Semoga di usia yang baru ini, semua impian yang selama ini kamu simpan perlahan mulai menjadi kenyataan. Semoga setiap usaha yang kamu lakukan mendapatkan hasil terbaik.",
            "Aku berharap kamu selalu diberikan kesehatan. Karena dengan tubuh yang sehat, kamu bisa terus mengejar cita-cita, menikmati setiap momen indah, dan membahagiakan orang-orang yang kamu cintai.",
            "Semoga kebahagiaan selalu menemukanmu, bahkan pada hari-hari yang terasa berat. Ketika dunia terasa melelahkan, semoga selalu ada alasan kecil yang mampu membuatmu kembali tersenyum.",
            "Terima kasih karena telah menjadi seseorang yang mampu menginspirasi orang lain. Sikapmu, semangatmu, dan ketulusanmu memiliki arti yang sangat besar bagi banyak orang.",
            "Hari ini adalah hari spesialmu. Jangan lupa menikmati setiap detiknya. Tersenyumlah lebih banyak, tertawalah lebih lepas, dan rayakan semua pencapaianmu, sekecil apa pun itu.",
            "Selamat ulang tahun, Princess. Semoga hari ini menjadi awal dari babak baru yang lebih indah daripada semua tahun sebelumnya. Teruslah bersinar, teruslah bermimpi, teruslah menjadi dirimu sendiri. Happy Birthday! 🎂❤️✨"
        ];

        const fragment = document.createDocumentFragment();
        wishes.forEach(text => {
            const p = document.createElement('p');
            p.className = 'mb-3 fade-in';
            p.innerText = text;
            fragment.appendChild(p);
        });
        container.appendChild(fragment);
    };

    // --- 4. Fungsi Kirim Pesan ---
    window.kirimPesan = () => {
        const pesan = document.getElementById('pesanInput')?.value || "";
        const nomorWA = "6282161897465"; 
        
        if (pesan.trim() === "") {
            alert("Silakan tulis pesanmu terlebih dahulu ya! ❤️");
            return;
        }
        
        const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent("Halo! Aku mau bilang: " + pesan)}`;
        window.open(url, '_blank');
    };

    // --- 5. Interactive Features ---
    const initFeatures = () => {
        // Music Logic
        const music = document.getElementById('mySong');
        if (music) {
            music.volume = 0.5;
            const playMusic = () => {
                music.play().then(() => {
                    document.removeEventListener('click', playMusic);
                    document.removeEventListener('touchstart', playMusic);
                }).catch(e => console.log("Menunggu interaksi pengguna..."));
            };
            document.addEventListener('click', playMusic);
            document.addEventListener('touchstart', playMusic);
        }

        // Tombol Kejutan ke Dana Kaget
        const btnKejutan = document.getElementById('btnKejutan');
        if (btnKejutan) {
            btnKejutan.addEventListener('click', (e) => {
                e.preventDefault();
                // Ganti URL di bawah ini dengan link Dana Kaget Anda
                const linkDanaKaget = 'https://link.dana.id/danakaget?c=sya5jdjby&r=fnPuEI&orderId=20260723101214535715010300166500089752065';
                window.open(linkDanaKaget, '_blank');
            });
        }

        // --- Fitur Hujan Hati (Heart Rain) ---
        const btnHeart = document.getElementById('heartBtn');
        if (btnHeart) {
            btnHeart.addEventListener('click', (e) => {
                e.preventDefault();

                const container = document.createElement('div');
                container.className = 'heart-rain-container';
                document.body.appendChild(container);

                const createHeart = () => {
                    const heart = document.createElement('div');
                    heart.innerHTML = '❤️';
                    heart.className = 'falling-heart';
                    
                    // Memastikan posisi random tersebar di seluruh layar
                    const randomLeft = Math.floor(Math.random() * 95); 
                    heart.style.left = randomLeft + 'vw';
                    
                    heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
                    container.appendChild(heart);
                    
                    setTimeout(() => heart.remove(), 3000);
                };

                const rainInterval = setInterval(createHeart, 100); 

                setTimeout(() => {
                    clearInterval(rainInterval);
                    setTimeout(() => container.remove(), 3000);
                }, 5000);
            });
        }

        // Love Meter
        const loveMeter = document.getElementById('love-meter');
        if (loveMeter) {
            loveMeter.classList.remove('bg-danger');
            loveMeter.classList.add('bg-primary');
            loveMeter.style.width = '100%';
            loveMeter.innerText = 'Love Completed ❤️';
        }

        // Toast
        const toastBtn = document.getElementById('liveToastBtn');
        const toastEl = document.getElementById('liveToast');
        if (toastBtn && toastEl) {
            toastBtn.addEventListener('click', () => {
                const toast = new bootstrap.Toast(toastEl);
                toast.show();
            });
        }

        // Carousel
        const carouselEl = document.querySelector('#carouselExample');
        if (carouselEl) {
            new bootstrap.Carousel(carouselEl, {
                interval: 3000,
                ride: 'carousel'
            });
        }
    };

    // --- 6. Execution ---
    initBootstrapComponents();
    handleNavbarScroll();
    injectWishes();
    initFeatures();
});