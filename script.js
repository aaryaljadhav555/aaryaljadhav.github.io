function openLightbox(imgSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    
    lightbox.style.display = "flex";
    lightboxImg.src = imgSrc;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Close lightbox when pressing "Esc" key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeLightbox();
});
