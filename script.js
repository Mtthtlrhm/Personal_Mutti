let lastScrollTop = 0; // Menyimpan posisi scroll terakhir
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Scroll ke bawah (menyembunyikan navbar)
    if (currentScroll > lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)'; // Menyembunyikan navbar
    } 
    // Scroll ke atas (menampilkan navbar)
    else {
        navbar.style.transform = 'translateY(0)'; // Menampilkan navbar
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Mencegah nilai negatif
});


// Menambahkan event listener untuk logo
const logo = document.querySelector('.logo');

logo.addEventListener('click', function() {
    // Toggle kelas 'active' pada logo untuk membesarkan dan mengembalikannya
    logo.classList.toggle('active');
});


// Menambahkan event listener pada foto profil untuk membesarkannya saat diklik
const profilePic = document.querySelector('.profile-pic');

profilePic.addEventListener('click', () => {
    profilePic.classList.toggle('clicked'); // Toggle class 'clicked' saat diklik
});



// Menambahkan observer untuk memantau saat section#about muncul di layar
const aboutSection = document.querySelector('#about');

// Menggunakan Intersection Observer API untuk memantau kemunculan section
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Menambahkan kelas 'visible' untuk memulai animasi
            entry.target.classList.add('visible');
        } else {
            // Hapus kelas 'visible' saat elemen keluar dari layar
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.5 }); // Memulai animasi saat 50% dari elemen terlihat di layar

// Mengamati elemen #about
observer.observe(aboutSection);

document.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('#about');
    const rect = aboutSection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
        document.body.classList.add('scroll-visible');
    } else {
        document.body.classList.remove('scroll-visible');
    }
});

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('open');

        // Animasi ikon hamburger berubah menjadi "X"
        hamburgerMenu.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    






