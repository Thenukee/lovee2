/* ============================================
   🌹 THE MOST ROMANTIC WEBPAGE EVER - JS 🌹
   ============================================ */

// ===========================
// PRELOADER
// ===========================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
        initHeroAnimations();
    }, 2000);
});

// ===========================
// SPARKLE CURSOR TRAIL
// ===========================
const sparkleCanvas = document.getElementById('sparkle-canvas');
const ctx = sparkleCanvas.getContext('2d');
let sparkles = [];
let mouseX = 0, mouseY = 0;

function resizeCanvas() {
    sparkleCanvas.width = window.innerWidth;
    sparkleCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    for (let i = 0; i < 3; i++) {
        sparkles.push({
            x: mouseX + (Math.random() - 0.5) * 20,
            y: mouseY + (Math.random() - 0.5) * 20,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2 - 1,
            opacity: 1,
            color: ['#ff6b9d', '#f6b93b', '#ff4757', '#f8a5c2', '#ffffff'][Math.floor(Math.random() * 5)],
            decay: Math.random() * 0.02 + 0.015
        });
    }
});

function animateSparkles() {
    ctx.clearRect(0, 0, sparkleCanvas.width, sparkleCanvas.height);
    sparkles = sparkles.filter(s => s.opacity > 0);
    sparkles.forEach(s => {
        s.x += s.speedX;
        s.y += s.speedY;
        s.opacity -= s.decay;
        s.size *= 0.98;
        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        // Draw a tiny star shape
        const spikes = 4;
        const outerRadius = s.size;
        const innerRadius = s.size * 0.4;
        for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (i * Math.PI) / spikes - Math.PI / 2;
            if (i === 0) ctx.moveTo(s.x + radius * Math.cos(angle), s.y + radius * Math.sin(angle));
            else ctx.lineTo(s.x + radius * Math.cos(angle), s.y + radius * Math.sin(angle));
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    });
    requestAnimationFrame(animateSparkles);
}
animateSparkles();

// ===========================
// FLOATING HEARTS BACKGROUND
// ===========================
function createBackgroundHearts() {
    const container = document.getElementById('hearts-bg');
    const hearts = ['❤️', '💕', '💗', '💖', '💘', '♥', '🤍', '💜'];
    
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('span');
        heart.className = 'bg-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 15 + 15) + 's';
        heart.style.animationDelay = (Math.random() * 20) + 's';
        container.appendChild(heart);
    }
}
createBackgroundHearts();

// ===========================
// HERO PARTICLES (Twinkling Stars)
// ===========================
function createHeroParticles() {
    const container = document.getElementById('hero-particles');
    for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        particle.style.setProperty('--delay', (Math.random() * 5) + 's');
        particle.style.width = (Math.random() * 3 + 1) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}
createHeroParticles();

// ===========================
// ROSE PETALS
// ===========================
function createRosePetals() {
    const container = document.getElementById('rose-petals');
    const colors = ['#e74c6f', '#c44569', '#f8a5c2', '#e056a0', '#d4a373'];
    
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.background = colors[Math.floor(Math.random() * colors.length)];
        petal.style.setProperty('--duration', (Math.random() * 8 + 8) + 's');
        petal.style.setProperty('--delay', (Math.random() * 15) + 's');
        petal.style.setProperty('--drift', (Math.random() * 200 - 100) + 'px');
        petal.style.width = (Math.random() * 10 + 8) + 'px';
        petal.style.height = (Math.random() * 10 + 8) + 'px';
        petal.style.opacity = 0;
        container.appendChild(petal);
    }
}
createRosePetals();

// ===========================
// SPICY SECTION EMBERS
// ===========================
function createEmbers() {
    const container = document.getElementById('spicy-particles');
    for (let i = 0; i < 40; i++) {
        const ember = document.createElement('div');
        ember.className = 'ember';
        ember.style.left = Math.random() * 100 + '%';
        ember.style.setProperty('--size', (Math.random() * 4 + 2) + 'px');
        ember.style.setProperty('--duration', (Math.random() * 4 + 3) + 's');
        ember.style.setProperty('--delay', (Math.random() * 8) + 's');
        ember.style.setProperty('--drift', (Math.random() * 100 - 50) + 'px');
        container.appendChild(ember);
    }
}
createEmbers();

// ===========================
// PROMISE SECTION STARS
// ===========================
function createStars() {
    const container = document.getElementById('promise-stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = (Math.random() * 3 + 1) + 'px';
        star.style.height = star.style.width;
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        star.style.setProperty('--delay', (Math.random() * 5) + 's');
        container.appendChild(star);
    }
}
createStars();

// ===========================
// HERO ANIMATIONS
// ===========================
function initHeroAnimations() {
    const revealElements = document.querySelectorAll('#hero .reveal-text');
    revealElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 300 + i * 400);
    });
}

// ===========================
// NAVIGATION
// ===========================
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 200) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
    
    // Update active nav link
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;
        if (currentScroll >= top && currentScroll < bottom) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
    
    lastScroll = currentScroll;
});

// Custom smooth scroll with romantic easing
function smoothScrollTo(target, duration = 1200) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Romantic ease-in-out curve
    function easeInOutCubic(t) {
        return t < 0.5 
            ? 4 * t * t * t 
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * eased);

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    // Show romantic transition flash
    const flash = document.getElementById('section-transition');
    if (flash) {
        flash.classList.add('active');
        setTimeout(() => flash.classList.remove('active'), 800);
    }

    requestAnimationFrame(animation);
}

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            smoothScrollTo(target, 1200);
        }
    });
});

// ===========================
// SCROLL REVEAL ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || 0;
            setTimeout(() => {
                el.classList.add('visible');
            }, parseInt(delay));
        }
    });
}, observerOptions);

// Observe all animatable elements
function setupObservers() {
    // Reason cards
    document.querySelectorAll('.reason-card').forEach(card => observer.observe(card));
    
    // Timeline items
    document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));
    
    // Polaroids
    document.querySelectorAll('.polaroid').forEach((p, i) => {
        p.dataset.delay = i * 150;
        observer.observe(p);
    });
    
    // Spicy cards
    document.querySelectorAll('.spicy-card').forEach((card, i) => {
        card.dataset.delay = i * 100;
        observer.observe(card);
    });
    
    // Promise text paragraphs
    document.querySelectorAll('.promise-text p').forEach((p, i) => {
        p.dataset.delay = i * 200;
        observer.observe(p);
    });
    
    // Letter paper
    const letterPaper = document.getElementById('letter');
    if (letterPaper) observer.observe(letterPaper);
}

setupObservers();

// ===========================
// LOVE LETTER ENVELOPE
// ===========================
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

envelope.addEventListener('click', () => {
    envelope.classList.add('opened');
    setTimeout(() => {
        letter.classList.add('visible');
        envelope.style.display = 'none';
    }, 500);
});

// ===========================
// SECRET MESSAGE BUTTON
// ===========================
const secretBtn = document.getElementById('secret-btn');
const secretMessage = document.getElementById('secret-message');

secretBtn.addEventListener('click', () => {
    secretMessage.classList.toggle('show');
    if (secretMessage.classList.contains('show')) {
        // Trigger heart explosion
        createHeartExplosion(window.innerWidth / 2, window.innerHeight / 2, 30);
        secretBtn.querySelector('span').textContent = 'I love you forever 💕';
    } else {
        secretBtn.querySelector('span').textContent = 'Press for a secret message 💌';
    }
});

// ===========================
// LOVE COUNTER
// ==========================
// SET YOUR RELATIONSHIP START DATE HERE!
const startDate = new Date('2025-09-20'); // 💕 The day Thenuke asked her out!

function updateLoveCounter() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    const counterEl = document.getElementById('counter-days');
    
    // Animate counter
    let current = 0;
    const increment = Math.ceil(days / 60);
    const timer = setInterval(() => {
        current += increment;
        if (current >= days) {
            current = days;
            clearInterval(timer);
        }
        counterEl.textContent = current.toLocaleString();
    }, 30);
}

// Start counter when promise section is visible
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            updateLoveCounter();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const promiseSection = document.getElementById('promise');
if (promiseSection) counterObserver.observe(promiseSection);

// ===========================
// CLICK HEART/KISS EXPLOSION
// ===========================
function createHeartExplosion(x, y, count = 12) {
    const container = document.getElementById('kiss-container');
    const emojis = ['❤️', '💕', '💋', '💗', '💖', '✨', '🥰', '😘', '💘'];
    
    for (let i = 0; i < count; i++) {
        const kiss = document.createElement('span');
        kiss.className = 'kiss-emoji';
        kiss.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        kiss.style.left = x + 'px';
        kiss.style.top = y + 'px';
        
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const distance = Math.random() * 120 + 60;
        kiss.style.setProperty('--dx', Math.cos(angle) * distance + 'px');
        kiss.style.setProperty('--dy', Math.sin(angle) * distance - 50 + 'px');
        kiss.style.setProperty('--rot', (Math.random() * 360 - 180) + 'deg');
        kiss.style.fontSize = (Math.random() * 1 + 1) + 'rem';
        
        container.appendChild(kiss);
        
        setTimeout(() => kiss.remove(), 1500);
    }
}

// Double click anywhere for heart explosion
document.addEventListener('dblclick', (e) => {
    createHeartExplosion(e.clientX, e.clientY, 15);
});

// Single click mini hearts
document.addEventListener('click', (e) => {
    if (e.target.closest('#kiss-container') || e.target.closest('button') || e.target.closest('a') || e.target.closest('.spicy-card')) return;
    createHeartExplosion(e.clientX, e.clientY, 5);
});

// ===========================
// MUSIC (sunshine.mp3)
// ===========================
let isPlaying = false;
const musicBtn = document.getElementById('music-toggle');
const bgMusic = new Audio('sunshine.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.5;

musicBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    musicBtn.classList.toggle('playing');
    
    if (isPlaying) {
        bgMusic.play();
        musicBtn.title = 'Pause music';
    } else {
        bgMusic.pause();
        musicBtn.title = 'Play romantic music';
    }
});

// ===========================
// PARALLAX EFFECT ON SCROLL
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 1.2;
    }
    
    // Parallax for floating emoji
    document.querySelectorAll('.floating-emoji').forEach((emoji, i) => {
        emoji.style.transform = `translateY(${Math.sin(scrolled * 0.005 + i) * 10}px)`;
    });
});

// ===========================
// TYPED TEXT EFFECT FOR LOVE LETTER
// ===========================
let hasTyped = false;
const letterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasTyped) {
            hasTyped = true;
            // The letter is already visible, just add a nice glow effect
            entry.target.style.boxShadow = '0 0 60px rgba(231, 76, 111, 0.2), 0 20px 60px rgba(0,0,0,0.4)';
        }
    });
}, { threshold: 0.3 });

if (letter) letterObserver.observe(letter);

// ===========================
// EASTER EGG: Konami code = MEGA heart explosion
// ===========================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // MEGA EXPLOSION
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    createHeartExplosion(
                        Math.random() * window.innerWidth,
                        Math.random() * window.innerHeight,
                        20
                    );
                }, i * 200);
            }
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// ===========================
// SMOOTH REVEAL ON MOBILE (touch support)
// ===========================
document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    createHeartExplosion(touch.clientX, touch.clientY, 3);
}, { passive: true });

// ===========================
// RANDOM LOVE QUOTES IN CONSOLE (because why not 💕)
// ===========================
const loveQuotes = [
    "💕 You are the poem I never knew how to write and this is the love I never knew I had.",
    "🌹 In case you ever foolishly forget; I am never not thinking of you.",
    "💋 I want all of you, forever, every day. — The Notebook",
    "✨ Whatever our souls are made of, yours and mine are the same.",
    "❤️ I love you not only for what you are, but for what I am when I am with you.",
    "🔥 You are the last thought I have at night and the first one when I wake up.",
];

console.log('%c' + loveQuotes[Math.floor(Math.random() * loveQuotes.length)], 
    'font-size: 16px; color: #e74c6f; font-family: cursive; padding: 10px;');
console.log('%c Made with ❤️ for someone special', 
    'font-size: 12px; color: #f6b93b;');

// ===========================
// SECTION NAVIGATION ARROWS
// ===========================
function createSectionArrows() {
    const sections = document.querySelectorAll('section');
    const sectionNames = {
        'hero': 'Read my letter 💌',
        'love-letter': 'Why I love you ❤️',
        'reasons': 'Our story 💫',
        'timeline': 'Our moments 📸',
        'gallery': 'Get spicy 🔥',
        'spicy': 'My promise 💍',
    };

    sections.forEach((section, i) => {
        if (i < sections.length - 1) {
            const arrow = document.createElement('button');
            arrow.className = 'section-nav-arrow';
            arrow.innerHTML = `
                <span class="arrow-text">${sectionNames[section.id] || 'Continue ↓'}</span>
                <span class="arrow-icon"></span>
            `;
            arrow.addEventListener('click', () => {
                smoothScrollTo(sections[i + 1], 1200);
            });
            section.appendChild(arrow);
        }
    });
}

// ===========================
// KEYBOARD NAVIGATION
// ===========================
let currentSectionIndex = 0;
const allSections = () => document.querySelectorAll('section');

function getCurrentSection() {
    const sections = allSections();
    const scrollPos = window.pageYOffset + window.innerHeight / 3;
    let idx = 0;
    sections.forEach((section, i) => {
        if (scrollPos >= section.offsetTop) idx = i;
    });
    return idx;
}

document.addEventListener('keydown', (e) => {
    // Don't interfere with Konami code
    if (e.code.startsWith('Arrow') && !e.ctrlKey && !e.altKey) {
        const sections = allSections();
        const current = getCurrentSection();

        if ((e.code === 'ArrowDown' || e.code === 'ArrowRight') && current < sections.length - 1) {
            // Only navigate sections with ArrowDown (not ArrowRight, to preserve Konami)
            if (e.code === 'ArrowDown') {
                e.preventDefault();
                smoothScrollTo(sections[current + 1], 1000);
            }
        } else if (e.code === 'ArrowUp' && current > 0) {
            e.preventDefault();
            smoothScrollTo(sections[current - 1], 1000);
        }
    }
});

// ===========================
// INIT: When DOM is fully ready
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Create section arrows
    createSectionArrows();

    // Create romantic transition overlay
    const transitionEl = document.createElement('div');
    transitionEl.className = 'section-transition';
    transitionEl.id = 'section-transition';
    document.body.appendChild(transitionEl);

    // Smooth scrolling for scroll-down button
    const scrollDownBtn = document.querySelector('.scroll-down');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScrollTo(document.getElementById('love-letter'), 1200);
        });
    }
});
