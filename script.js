// 1. Lightbox Feature (Extra Requirement)
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");

document.querySelectorAll('.zoomable').forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

document.querySelector('.close').onclick = function() { 
    modal.style.display = "none";
}

// 2. Scroll Animations (Technical Requirement)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.7s ease-out";
    observer.observe(section);
});
