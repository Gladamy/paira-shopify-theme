// Header scroll behavior
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Smooth scrolling for anchor links
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

  // Sticky add-to-cart for mobile product pages
  if (window.innerWidth <= 768 && document.querySelector('.product-details')) {
    const addToCartBtn = document.querySelector('.product-details button[type="submit"]');
    if (addToCartBtn) {
      const sticky = document.createElement('div');
      sticky.className = 'sticky-add-to-cart';
      sticky.innerHTML = '<button>Add to Cart</button>';
      sticky.querySelector('button').addEventListener('click', () => {
        addToCartBtn.click();
      });
      document.body.appendChild(sticky);
    }
  }

  // Fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });

  document.querySelectorAll('.hero, .split, .usps, .product-page').forEach(el => {
    observer.observe(el);
  });
});