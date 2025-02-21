document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".left1 button").addEventListener("click", function () {
        window.location.href = "3D.html";
    });
});


document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', function () {
        const pages = {
            "STATISTICS": "statistics.html",
            "Quels produits existent ?": "products.html",
            "Comment fonctionne le système ?": "software.html",
        };

        const page = pages[this.innerText.trim()];
        if (page) {
            window.location.href = page;
        } else {
            console.error("Page not found for:", this.innerText);
        }
    });
});



