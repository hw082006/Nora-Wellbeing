// Scroll-reveal for elements marked .reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Clicking "Offerings" expands/collapses its submenu rather than
  // navigating anywhere — it's a <button>, not a link, on every screen
  // size, so hover (desktop) and this click toggle (any device) both work.
  const dropdownTrigger = document.querySelector('.has-dropdown > .dropdown-trigger');
  if (dropdownTrigger) {
    dropdownTrigger.addEventListener('click', () => {
      const isExpanded = dropdownTrigger.parentElement.classList.toggle('expanded');
      dropdownTrigger.setAttribute('aria-expanded', isExpanded);
    });
  }

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    question.setAttribute('aria-expanded', isOpen);
  });
});

// Generic accordion (e.g. retreat "what's included" list)
document.querySelectorAll('.accordion-item').forEach(item => {
  const question = item.querySelector('.accordion-question');
  question.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    question.setAttribute('aria-expanded', isOpen);
  });
});

// "Read more" text truncation (e.g. long retreat block copy)
document.querySelectorAll('.text-collapse-toggle').forEach(btn => {
  const wrap = document.getElementById(btn.getAttribute('aria-controls'));
  if (!wrap) return;
  btn.addEventListener('click', () => {
    const isExpanded = wrap.classList.toggle('expanded');
    btn.textContent = isExpanded ? 'Show Less' : 'Read More';
    btn.setAttribute('aria-expanded', isExpanded);
  });
});
