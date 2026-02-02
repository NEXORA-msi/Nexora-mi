// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.card, .about, .contact-preview');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===== SMOOTH NAV SCROLL (ABOUT) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== BUTTON GLOW INTERACTION =====
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.background = `radial-gradient(circle at ${x}px ${y}px, #00f0ff, #6a5cff)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.background = 'linear-gradient(45deg, #6a5cff, #00f0ff)';
  });
});

// ===== CARD FLOAT EFFECT =====
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});
