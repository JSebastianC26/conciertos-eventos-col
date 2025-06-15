const Slider = {
    currentSlide: 0,
    totalSlides: 3,
    isPlaying: true,
    autoSlideInterval: null,
    autoSlideDelay: 3000,

    init() {
        this.totalSlides = document.querySelectorAll('.slide').length;
        this.applyBackgrounds();
        this.startAutoSlide();
        
        // Agregar eventos de teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.changeSlide(-1);
            if (e.key === 'ArrowRight') this.changeSlide(1);
        });
    },

    changeSlide(direction) {
        // Remover clase active del slide actual
        const currentSlideElement = document.querySelectorAll('.slide')[this.currentSlide];
        const currentDot = document.querySelectorAll('.nav-dot')[this.currentSlide];
        
        currentSlideElement.classList.remove('active');
        currentDot.classList.remove('active');

        // Calcular nuevo índice
        this.currentSlide += direction;
        
        if (this.currentSlide >= this.totalSlides) {
            this.currentSlide = 0;
        }
        if (this.currentSlide < 0) {
            this.currentSlide = this.totalSlides - 1;
        }

        // Activar nuevo slide
        this.showSlide(this.currentSlide);
        
        // Resetear auto-slide
        this.restartAutoSlide();
    },

    goToSlide(index) {
        if (index === this.currentSlide) return;
        
        // Remover clase active del slide actual
        const currentSlideElement = document.querySelectorAll('.slide')[this.currentSlide];
        const currentDot = document.querySelectorAll('.nav-dot')[this.currentSlide];
        
        currentSlideElement.classList.remove('active');
        currentDot.classList.remove('active');

        this.currentSlide = index;
        this.showSlide(this.currentSlide);
        
        // Resetear auto-slide
        this.restartAutoSlide();
    },

    showSlide(index) {
        const slideElement = document.querySelectorAll('.slide')[index];
        const dotElement = document.querySelectorAll('.nav-dot')[index];
        
        slideElement.classList.add('active');
        dotElement.classList.add('active');
    },

    startAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
        
        this.autoSlideInterval = setInterval(() => {
            if (this.isPlaying) {
                this.changeSlide(1);
            }
        }, this.autoSlideDelay);
    },

    restartAutoSlide() {
        this.startAutoSlide();
    },

    pauseSlider(element) {
        this.isPlaying = false;
        element.style.animationPlayState = 'paused';
    },

    resumeSlider(element) {
        this.isPlaying = true;
        element.style.animationPlayState = 'running';
    },

    handleCTAClick(artistName) {
        alert(`Redirigiendo a comprar entradas para: ${artistName}`);
        // Aquí puedes agregar la lógica de redirección
        // window.location.href = `/comprar-entradas/${artistName}`;
    },

    applyBackgrounds() {
        const slides = document.querySelectorAll('.slide');

        const backgrounds = [
            'linear-gradient(135deg, #00bcd4 0%, #ff6b35 50%, #9c27b0 100%)',
            'linear-gradient(135deg, #ff6b35 0%, #9c27b0 50%, #00bcd4 100%)',
            'linear-gradient(135deg, #9c27b0 0%, #00bcd4 50%, #ff6b35 100%)'
        ];

        slides.forEach((slide, index) => {
            if (backgrounds[index]) {
                slide.style.background = backgrounds[index];
            }
        });
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    Slider.init();
});

// Pausar cuando la ventana pierde el foco
window.addEventListener('blur', () => {
    Slider.isPlaying = false;
});

// Reanudar cuando la ventana recupera el foco
window.addEventListener('focus', () => {
    Slider.isPlaying = true;
});