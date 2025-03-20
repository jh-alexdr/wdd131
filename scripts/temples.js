// Update footer copyright year and last modified date
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;

    footer.innerHTML = `
        <p>&copy; ${year} <span>👍</span> Jhon A. Tobar T. <span>👍</span> Quito, Ecuador</p>
        <p>Last Modification: ${lastModified}</p>
    `;
});

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav ul");
    const hamburger = document.createElement("button");
    hamburger.innerHTML = "☰";
    hamburger.classList.add("hamburger");

    document.querySelector("header").prepend(hamburger);

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("visible");
        hamburger.innerHTML = nav.classList.contains("visible") ? "✖" : "☰";
    });
});
