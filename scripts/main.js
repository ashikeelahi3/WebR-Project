// হ্যামবার্গার মেনুর কার্যকারিতা
document.addEventListener('DOMContentLoaded', () => {
    // সব এলিমেন্ট সিলেক্ট করা
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // টগল মেনু ফাংশন
    const toggleMenu = () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        // ARIA অ্যাক্সেসিবিলিটি সাপোর্ট
        const isExpanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    };

    // মেনু বন্ধ করার ফাংশন
    const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
    };

    // হ্যামবার্গার বাটন ক্লিক ইভেন্ট
    hamburger.addEventListener('click', toggleMenu);

    // নেভ লিংকে ক্লিক করলে মেনু বন্ধ হবে
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // বাইরে ক্লিক করলে মেনু বন্ধ হবে
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMenu();
        }
    });

    // ESC কী প্রেস করলে মেনু বন্ধ হবে
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
});

// নেভিগেশন টগল
const navToggle = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// স্ক্রল করার সময় নেভবার স্টাইল পরিবর্তন
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = '#1a1a1a';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.background = 'var(--background-dark)';
            navbar.style.padding = '1rem 0';
        }
    });
}

// স্মুথ স্ক্রলিং
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// অ্যাক্টিভ মেনু আইটেম হাইলাইট
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

if (sections.length && navLinks.length) {
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// হ্যামবার্গার মেনু ফাংশনালিটি
const navHamburger = document.querySelector(".hamburger");

navHamburger.addEventListener("click", () => {
    navHamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// মেনু আইটেমে ক্লিক করলে মেনু বন্ধ হবে
document.querySelectorAll(".nav-menu li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})); 
