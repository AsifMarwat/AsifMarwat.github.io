// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navbar = document.querySelector('.navbar');
  
  mobileMenuBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    mobileMenuBtn.innerHTML = navbar.classList.contains('active') ? 
      '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form submission
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would typically send the form data to a server
      // For now, we'll just show an alert
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });
  });
  
  // Add animation to elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.skill-category, .cert-card, .project-card, .blog-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state for animated elements
  document.querySelectorAll('.skill-category, .cert-card, .project-card, .blog-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load
});