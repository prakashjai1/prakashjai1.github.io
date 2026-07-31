
// Type animation
new Typed(".typing", {
  strings: [
    "Frontend Developer",
    "React Developer",
    "Web Developer"
  ],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true
});


// Contact form reset

window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
        document.querySelector(".contact-form").reset();
    }
});