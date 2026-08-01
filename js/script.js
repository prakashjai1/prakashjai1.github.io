
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

// Hamburger 
const navIcon = document.querySelector(".navicon")
const menuBox = document.querySelector(".menuBox")
const navLink = document.querySelectorAll(".menuBox a")

navIcon.addEventListener("click",()=>{
  menuBox.classList.toggle("active")
})

navLink.forEach((link)=>{
  link.addEventListener("click",()=>{
    menuBox.classList.remove("active")
  })
})
