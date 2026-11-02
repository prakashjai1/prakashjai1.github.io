const dev = (n) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${n}.svg`;
const skills = [
  ["HTML5", dev("html5/html5-original")],
  ["CSS3", dev("css3/css3-original")],
  ["JavaScript", dev("javascript/javascript-original")],
  ["React", dev("react/react-original")],
  ["Tailwind CSS", dev("tailwindcss/tailwindcss-original")],
  ["Bootstrap", dev("bootstrap/bootstrap-original")],
  ["Git", dev("git/git-original")],
  ["Responsive design", "assets/images/respon-design-icon.jpg"],
];
const projects = [
  {
    t: "Digital Gurukul – Educational Website",
    img: "project-1.png",
    tags: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "React Router DOM",
      "Vite",
    ],
    d: "A responsive educational website built with reusable React components.",
    demo: "https://digitalgurukul.vercel.app/",
    gh: "https://github.com/prakashjai1/digital_gurukul",
  },
  {
    t: "Developer Career OS Tracker",
    img: "project-2.png",
    tags: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "React Router DOM",
      "Vite",
      "useState",
    ],
    d: "A career dashboard to track skills, projects, job applications and notes with interactive UI components.",
    demo: "https://developer-career-os-tracker.vercel.app/",
    gh: "https://github.com/prakashjai1/DeveloperCareerOSTracker",
  },
  {
    t: "Induz – Industrial Business Website",
    img: "project-4.png",
    tags: [
      "HTML5",
      "CSS3",
      "Font Awesome",
      "Google Fonts",
      "Responsive design",
    ],
    d: "A responsive industrial business website with a clean layout that adapts to every screen size.",
    demo: "https://prakashjai1.github.io/induz/",
    gh: "https://github.com/prakashjai1/induz",
  },
  {
    t: "Yummy – Restaurant Table Booking",
    img: "project-3.png",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Media queries",
      "Form validation",
    ],
    d: "A responsive restaurant website with an interactive table booking form.",
    demo: "https://prakashjai1.github.io/Online_Table_Booking_Restaurant/",
    gh: "https://github.com/prakashjai1/Online_Table_Booking_Restaurant",
  },
  {
    t: "Movie Search & Details",
    img: "project-5.png",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Fetch API",
      "REST API",
      "Responsive design",
    ],
    d: "Search movies and see detailed information loaded dynamically from an API.",
    demo: "",
    gh: "https://github.com/prakashjai1/movie-search-app",
  },
];
const certs = [
  [
    "Frontend Web Development Coding Hackathon",
    "Code Easy Academy",
    "Feb 2026 – Apr 2026",
    "https://drive.google.com/file/d/1aWeiDT6SWa98Zyns72SmNDR9BEtCt28A/view?usp=sharing",
  ],
  [
    "Introduction to Artificial Intelligence",
    "IBM SkillBuild",
    "Aug 2024 – Sep 2024",
    "https://drive.google.com/file/d/1P7_sxXyXJdCL3xudnoXtbz8hoc5PF1PG/view?usp=sharing",
  ],
  [
    "Frontend Web Development",
    "Hindi Tech Tutorials (Rajdeep Dhakad)",
    "Apr 2022 – Jan 2023",
    "https://drive.google.com/file/d/18xNv0uxIIsWpJKOjmSsVfgMRJw9A_akR/view?usp=sharing",
  ],
];
document.getElementById("skillGrid").innerHTML = skills
  .map(
    ([n, i]) =>
      `<div class="skill"><img src="${i}" alt="" loading="lazy"><span>${n}</span></div>`,
  )
  .join("");
document.getElementById("projGrid").innerHTML = projects
  .map(
    (p) => `
  <article class="proj">
    <div class="shot"><img src="assets/images/${p.img}" alt="Screenshot of ${p.t}" loading="lazy"></div>
    <div class="body">
      <h3>${p.t}</h3><p>${p.d}</p>
      <ul class="tags">${p.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
      <div class="plinks">${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Live demo</a>` : ""}<a href="${p.gh}" target="_blank" rel="noopener">GitHub</a></div>
    </div>
  </article>`,
  )
  .join("");
document.getElementById("certGrid").innerHTML = certs
  .map(
    (c) => `
  <div class="cert"><div><h3>${c[0]}</h3><p>${c[1]} · ${c[2]}</p></div>
  <a href="${c[3]}" target="_blank" rel="noopener">View certificate</a></div>`,
  )
  .join("");

// cursor glow
const glow = document.getElementById("glow");
addEventListener("pointermove", (e) => {
  glow.style.setProperty("--mx", e.clientX + "px");
  glow.style.setProperty("--my", e.clientY + "px");
});

// typing roles
const roles = [
  "Frontend Developer",
  "React Developer",
  "Responsive UI Builder",
];
const out = document.getElementById("typed");
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (still) out.textContent = roles[0];
else {
  let r = 0,
    c = 0,
    del = false;
  (function tick() {
    const w = roles[r];
    out.textContent = w.slice(0, c);
    if (!del && c === w.length) {
      del = true;
      return setTimeout(tick, 1600);
    }
    if (del && c === 0) {
      del = false;
      r = (r + 1) % roles.length;
    }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 40 : 85);
  })();
}

// mobile menu + active link
const menu = document.getElementById("menu"),
  links = document.getElementById("links");
menu.onclick = () =>
  menu.setAttribute("aria-expanded", links.classList.toggle("open"));
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    menu.setAttribute("aria-expanded", false);
  }
});
const anchors = [...links.querySelectorAll("a")];
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting)
        anchors.forEach((a) =>
          a.classList.toggle("on", a.hash === "#" + e.target.id),
        );
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
document.querySelectorAll("main section").forEach((s) => io.observe(s));

// contact form opens the visitor's email app
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get("msg")}\n\nFrom: ${f.get("name")} (${f.get("email")})`;
  location.href = `mailto:prakashjaipatel1@gmail.com?subject=${encodeURIComponent("Portfolio message from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
});
