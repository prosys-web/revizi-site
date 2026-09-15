/* ═══════════════════════════════════════
   REVIZI — HOME v1.0
   JavaScript puro, sem bibliotecas externas
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── HEADER: sombra sutil ao rolar ── */
  var header = document.getElementById('header');
  function handleHeaderScroll() {
    if (window.scrollY > 8) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* ── MENU MOBILE (hamburger) ── */
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');

  hamburger.addEventListener('click', function () {
    var isOpen = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  var mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── FAQ ACCORDION (apenas uma pergunta aberta por vez) ── */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      faqItems.forEach(function (i) { i.classList.remove('open'); });
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  /* ── FADE-IN AO ROLAR (scroll reveal, único efeito do sistema, 600ms ease-out) ── */
  var revealElements = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(function (el) { observer.observe(el); });

});
