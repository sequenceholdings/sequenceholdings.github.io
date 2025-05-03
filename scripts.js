const text =
  "Sequence Holdings is a long-term holding company that partners with exceptional businesses and management teams, providing capital, operational expertise, and technology to drive sustainable growth and industry leadership. We are a small team based in NYC and the SF Bay Area, founded by Neal Wu, Alex Rubin, and Michael Lee.";
const typingDelay = 15;

const typewriterText = document.getElementById("typewriter-text");
const cursor = document.getElementById("typewriter-cursor");

let index = 0;

function type() {
  if (index < text.length) {
    typewriterText.textContent += text.charAt(index);
    index++;
    setTimeout(type, typingDelay);
  } else {
    const button = document.querySelector(".button");
    button.style.visibility = "visible";

    setTimeout(() => {
      button.style.opacity = "1";
    }, 50);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});
