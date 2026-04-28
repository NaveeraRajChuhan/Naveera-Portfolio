// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Text Reveal Animation
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    tl.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    })
    .from(".main-title", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    }, "-=0.8")
    .from(".lead", {
        opacity: 0,
        duration: 1
    }, "-=0.5")
    .from(".sidebar", {
        x: -300,
        duration: 1
    }, "-=1");
});

// 2. Section Scroll Reveal
gsap.utils.toArray(".scroll-reveal").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

// 3. Service Cards Hover Effect using GSAP
const cards = document.querySelectorAll(".service-card");
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -10, duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, duration: 0.3 });
    });
});

// 4. Smooth Anchor Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});