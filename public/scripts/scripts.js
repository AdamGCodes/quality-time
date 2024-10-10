//!-- Responsive Nav
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');

    burger.classList.toggle('toggle');
})

//!-- Displaying Flashes (close button) Chat GPT Aided
document.addEventListener('DOMContentLoaded', function () {
    // Find all close buttons
    const closeButtons = document.querySelectorAll('.alert .close');

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const alertBox = this.parentElement;
            alertBox.style.opacity = '0'; // Optional fade-out effect
            setTimeout(() => alertBox.remove(), 500); // Removes the element after 0.5s
        });
    });
});
