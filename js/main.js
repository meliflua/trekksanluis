// NAV SCROLL
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.pageYOffset > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// PARALLAX
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    heroBg.style.transform = `translateY(${scrolled * 0.35}px)`;
  }
});

// INTERSECTION OBSERVER
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.pillar, .spec-item, .ruta-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// FORM
const form = document.getElementById('reservaForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('.form-submit');
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  
  // Formspree maneja el envío automáticamente
  setTimeout(() => {
    form.style.display = 'none';
    successMsg.style.display = 'block';
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 1200);
});
