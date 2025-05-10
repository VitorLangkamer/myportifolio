// efeito surgir header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("rolar", window.scrollY > 0);
});

// efeito digitando ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const h3 = document.querySelector("h3");
  const span = h3.querySelector("span");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          span.style.opacity = "1";
          span.style.transform = "translate(-10px, 0)";
          h3.classList.add("typing-effect");

          // Add typing effect for the h3 text
          const text = h3.textContent;
          h3.textContent = "";
          let index = 0;

          const typingInterval = setInterval(() => {
            if (index < text.length) {
              h3.textContent += text[index];
              index++;
            } else {
              clearInterval(typingInterval);
            }
          }, 100); // Adjust typing speed here
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(h3);
});

// efeito surgir h1 suavemente ao carregar a tela
document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");

  if (h1) {
    h1.style.opacity = "0";
    h1.style.transform = "translateY(20px)";
    h1.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    setTimeout(() => {
      h1.style.opacity = "1";
      h1.style.transform = "translateY(0)";
    }, 100); // Delay to ensure smooth appearance
  }
});
