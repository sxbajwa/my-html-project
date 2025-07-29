// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active section in nav while scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Back to Top Button
const backToTop = document.createElement("button");
backToTop.textContent = "↑";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

// Styling
Object.assign(backToTop.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px 14px",
  fontSize: "20px",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "#a020f0",
  color: "white",
  cursor: "pointer",
  display: "none",
  zIndex: "999"
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
