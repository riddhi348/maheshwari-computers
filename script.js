// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // Burger Animation
    burger.classList.toggle('toggle');
  });
}

// Smooth Scrolling for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Basic Form Submission Alert
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting Maheshwari Computers. We will get back to you soon!');
    contactForm.reset();
  });
}

// Scroll Animations
document.addEventListener("DOMContentLoaded", function () {
  // About section boxes (left/right)
  const animatedElements = document.querySelectorAll(".hidden-left, .hidden-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("hidden-left")) {
          entry.target.classList.add("show-left");
        }
        if (entry.target.classList.contains("hidden-right")) {
          entry.target.classList.add("show-right");
        }
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));

  // Services cards (staggered reveal from top)
  const serviceCards = document.querySelectorAll(".service-card.hidden");
  const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        serviceCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 200); // stagger: 200ms delay between each card
        });
        serviceObserver.disconnect(); // run once
      }
    });
  }, { threshold: 0.2 });

  if (serviceCards.length > 0) {
    serviceObserver.observe(serviceCards[0]); // trigger when first card enters view
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const testimonialCards = document.querySelectorAll(".testimonial-card.hidden");

  const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        testimonialCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 250); // stagger: 250ms delay between each card
        });
        testimonialObserver.disconnect(); // run once
      }
    });
  }, { threshold: 0.2 });

  if (testimonialCards.length > 0) {
    testimonialObserver.observe(testimonialCards[0]); // trigger when first card enters view
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".hidden-left, .hidden-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("hidden-left")) {
          entry.target.classList.add("show-left");
        }
        if (entry.target.classList.contains("hidden-right")) {
          entry.target.classList.add("show-right");
        }
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function() {
  const testimonials = document.querySelectorAll(".testimonial-card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        testimonials.forEach(card => card.classList.add("animate"));
        observer.disconnect(); // run only once
      }
    });
  }, { threshold: 0.3 }); // trigger when 30% visible

  const section = document.querySelector("#testimonials");
  if (section) {
    observer.observe(section);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const contactImage = document.querySelector(".contact-image");
  const contactInfo = document.querySelector(".contact-info");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactImage.classList.add("animate");
        contactInfo.classList.add("animate");
        observer.disconnect(); // run only once
      }
    });
  }, { threshold: 0.3 }); // trigger when 30% visible

  const section = document.querySelector("#contact");
  if (section) {
    observer.observe(section);
  }
});
