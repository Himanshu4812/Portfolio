document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
  });
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
