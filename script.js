function openLightbox(imgSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "flex";
    lightboxImg.src = imgSrc;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeLightbox();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
