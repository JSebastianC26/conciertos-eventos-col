// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 200);
        }
    });
}

// Document download function with enhanced animation
function downloadDocument(docType) {
    const button = event.target;
    const originalText = button.textContent;
    const originalBackground = button.style.background;

    // Animación mientras se carga
    button.textContent = '📂 Abriendo...';
    button.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    button.style.transform = 'scale(0.95)';

    setTimeout(() => {
        // Abrir PDF en nueva pestaña
        const pdfUrl = `./docs/${docType}.pdf`; // Asegúrate de que los archivos están en esta carpeta
        window.open(pdfUrl, '_blank');

        // Restaurar botón
        button.textContent = originalText;
        button.style.background = originalBackground;
        button.style.transform = 'scale(1)';
    }, 600); // pequeña pausa visual
}



// Initialize scroll animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', () => {
    animateOnScroll();
});

// Add smooth scrolling
document.documentElement.style.scrollBehavior = 'smooth';

// Add interactive hover effects for info items
document.querySelectorAll('.info-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.animation = 'none';
        this.offsetHeight; // Trigger reflow
        this.style.animation = 'pulse 0.6s ease-in-out';
    });
});

// Add CSS for pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
document.head.appendChild(pulseStyle);