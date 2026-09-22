console.log("Pedro Santana Official Website loaded successfully!");

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation:", link.textContent);
    });
});