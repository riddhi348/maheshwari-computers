// ===============================
// Mobile Menu Toggle
// ===============================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle'); // Burger animation
  });
}

// ===============================
// Smooth Scrolling for Links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===============================
// Basic Form Submission Alert
// ===============================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting Maheshwari Computers. We will get back to you soon!');
    contactForm.reset();
  });
}

// ===============================
// Scroll Animations (Unified)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  // Generic observer for hidden elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("hidden-left")) {
          entry.target.classList.add("show-left");
        }
        if (entry.target.classList.contains("hidden-right")) {
          entry.target.classList.add("show-right");
        }
        if (entry.target.classList.contains("hidden-bottom")) {
          entry.target.classList.add("show-bottom");
        }
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".hidden-left, .hidden-right, .hidden-bottom")
    .forEach(el => observer.observe(el));

  // Services cards (staggered reveal)
  const serviceCards = document.querySelectorAll(".service-card.hidden");
  if (serviceCards.length > 0) {
    const serviceObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          serviceCards.forEach((card, index) => {
            setTimeout(() => card.classList.add("show"), index * 200);
          });
          serviceObserver.disconnect(); // run once
        }
      });
    }, { threshold: 0.2 });
    serviceObserver.observe(serviceCards[0]);
  }

  // Testimonials (staggered reveal)
  const testimonialCards = document.querySelectorAll(".testimonial-card.hidden");
  if (testimonialCards.length > 0) {
    const testimonialObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          testimonialCards.forEach((card, index) => {
            setTimeout(() => card.classList.add("show"), index * 250);
          });
          testimonialObserver.disconnect(); // run once
        }
      });
    }, { threshold: 0.3 });
    testimonialObserver.observe(testimonialCards[0]);
  }

  // Testimonials (animate class for slide-in effect)
  const testimonialsSection = document.querySelector("#testimonials");
  if (testimonialsSection) {
    const animateObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".testimonial-card")
            .forEach(card => card.classList.add("animate"));
          animateObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    animateObserver.observe(testimonialsSection);
  }

  // Contact section (image + info)
  const contactImage = document.querySelector(".contact-image");
  const contactInfo = document.querySelector(".contact-info");
  const contactSection = document.querySelector("#contact");

  if (contactSection && contactImage && contactInfo) {
    const contactObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactImage.classList.add("animate");
          contactInfo.classList.add("animate");
          contactObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    contactObserver.observe(contactSection);
  }
});