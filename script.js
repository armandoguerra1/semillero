document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const contactForm = document.getElementById('contactForm');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  emailjs.init("service_pefxosc");
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    emailjs.sendForm('service_pefxosc', 'template_4tvc8o4', this)
      .then(() => alert("Mensaje enviado con éxito!"))
      .catch(error => alert("Error al enviar: " + error));
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll('.testimonial');
  const changeSlide = (n) => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  };
  window.changeSlide = changeSlide;
  setInterval(() => changeSlide(1), 5000);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const counter = document.getElementById("projectCounter");
  let count = 0;
  const updateCounter = () => {
    if (count < 200) {
      count++;
      counter.textContent = count;
      requestAnimationFrame(updateCounter);
    }
  };
  updateCounter();
});