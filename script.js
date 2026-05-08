// Typing Animation Logic
const textElement = document.querySelector(".typing-text");
const words = ["Web Developer", "Java Programmer", "CSE Student"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Logic for pausing and switching words
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // Wait at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Start the typing effect when window loads
window.onload = typeEffect;

// Basic Form Submit Alert (Simulated)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for reaching out, Charan will get back to you soon!");
});