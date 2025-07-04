const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Machine Learning Engineer",
  "Data Scientist",
  "Python Developer",
  "Data Wrangler Extraordinaire 🐍"
];
let textIndex = 0;
let charIndex = 0;
let typingDelay = 80;
let erasingDelay = 40;
let newTextDelay = 1000; // Delay between typing different words

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedTextSpan.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    setTimeout(type, typingDelay + 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, 800);
});
