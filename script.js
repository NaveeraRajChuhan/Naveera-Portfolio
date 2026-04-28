// Register GSAP
gsap.registerPlugin(ScrollTrigger);

// 1. Theme and Color Logic
function toggleMode() {
    const body = document.documentElement;
    const currentMode = body.getAttribute('data-theme');
    const newMode = currentMode === 'dark' ? 'light' : 'dark';
    const icon = document.getElementById('mode-icon');
    
    body.setAttribute('data-theme', newMode);
    icon.innerText = newMode === 'dark' ? '🌙' : '☀️';
    
    // Animate transition
    gsap.fromTo("body", { opacity: 0.8 }, { opacity: 1, duration: 0.5 });
}

function setColor(colorName) {
    document.documentElement.setAttribute('data-color', colorName);
    
    // Visual feedback animation
    gsap.from(".section-heading, .logo span, .btn-nexus", {
        scale: 0.9,
        duration: 0.3,
        stagger: 0.1,
        ease: "back.out"
    });
}

// 2. Animations (GSAP)
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    tl.from(".sidebar", { x: -300, duration: 1, ease: "power3.out" })
      .from(".reveal-text", { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(".main-title", { x: -50, opacity: 0, duration: 1 }, "-=0.5")
      .from(".lead", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
      .from(".theme-controller", { opacity: 0, y: -20, duration: 0.5 });
});

// Scroll reveals
gsap.utils.toArray(".scroll-reveal").forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%"
        },
        y: 40,
        opacity: 0,
        duration: 1
    });
});

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
        
        // Update active class
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    };
});