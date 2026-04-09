document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const elementVisible = 50; // reduced for better visibility

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    setTimeout(revealOnScroll, 100);

    // 3. Form Submission Simulation
    const joinForm = document.getElementById('joinForm');
    const formMsg = document.getElementById('formMsg');

    if (joinForm) {
        joinForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const emailInput = joinForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            const btn = joinForm.querySelector('button');
            const originalText = btn.textContent;

            // 1. Email Validation
            if (!email.toLowerCase().endsWith('@vitbhopal.ac.in')) {
                formMsg.textContent = 'email should end with @vitbhopal.ac.in';
                formMsg.style.color = '#ff453a'; // Apple-style red
                return;
            }

            // Clear previous error message
            formMsg.textContent = '';
            formMsg.style.color = '';

            btn.textContent = 'Applying...';
            btn.disabled = true;

            // 2. Google Sheets Integration
            const SCRIPT_URL = 'LOL NOO!!! It is my API , i cannot make it public, make your own GOOGLE SHEET API by extension "google apps script"';

            try {
                // Send data to Google Sheets
                await fetch(SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email, date: new Date().toLocaleString() }),
                });

                // 3. Trigger Download of thanks.pdf
                const downloadLink = document.createElement('a');
                downloadLink.href = 'thanks.pdf';
                downloadLink.download = 'thanks.pdf';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);

                btn.textContent = originalText;
                btn.disabled = false;
                joinForm.reset();
                formMsg.textContent = 'Awesome! Your application has been received and your file is downloading.';
                formMsg.style.color = '#30d158'; // Apple-style green

                setTimeout(() => {
                    formMsg.textContent = '';
                }, 5000);
            } catch (error) {
                console.error('Error!', error.message);
                btn.textContent = originalText;
                btn.disabled = false;
                formMsg.textContent = 'Oops! Something went wrong. Please try again.';
                formMsg.style.color = '#ff453a';
            }
        });
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
        const isActive = mobileNav.classList.toggle('active');
        menuToggle.innerHTML = isActive
            ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
            : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            menuToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        });
    });
}
