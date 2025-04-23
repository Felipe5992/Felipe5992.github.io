document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('typed-text');
    const words = [
        'Desenvolvedor Front-End',
        'Python Developer',
        'Web Designer',
        'Criador de Experiências'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function type() {
        const current = wordIndex % words.length;
        const fullText = words[current];

        if (isDeleting) {
            element.textContent = fullText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = fullText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === fullText.length) {
            isEnd = true;
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex++;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
});
// Adicione após o código existente
function createStars() {
    const count = 100;
    const container = document.querySelector('body');
    
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'stars';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // ...seu código existente...
    createStars();
});