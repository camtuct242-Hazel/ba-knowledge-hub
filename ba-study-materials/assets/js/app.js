/**
 * BA Study Materials - Core App Scripts
 * Mobile menu, active tab highlight, smooth accordion behavior
 */

document.addEventListener('DOMContentLoaded', function () {
  // Mobile Nav Toggle
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function () {
      navMenu.classList.toggle('is-open');
    });
  }

  // Accordion Logic
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      const body = this.nextElementSibling;
      const isOpen = body.style.display === 'block';
      
      // Close other accordions in the same container if desired, or toggle
      body.style.display = isOpen ? 'none' : 'block';
      const arrow = this.querySelector('.accordion-arrow');
      if (arrow) {
        arrow.textContent = isOpen ? '▼' : '▲';
      }
    });
  });
});
