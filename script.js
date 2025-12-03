// Aguardar o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas as funcionalidades
    initParticles();
    initSmoothScrolling();
    initGlitchEffect();
    initTypingEffect();
    initFormValidation();
    initAnimations();
    initAPICheck();
});

// Sistema de partículas melhorado
function initParticles() {
    const particleCount = 50;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.6';
    
    document.body.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
    
    // Criar partículas
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, index) => {
            // Atualizar posição
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bordas da tela
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            // Desenhar partícula
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity})`;
            ctx.fill();
            
            // Conectar partículas próximas
            particles.forEach((otherParticle, otherIndex) => {
                if (index !== otherIndex) {
                    const distance = Math.sqrt(
                        Math.pow(particle.x - otherParticle.x, 2) +
                        Math.pow(particle.y - otherParticle.y, 2)
                    );
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
                        ctx.stroke();
                    }
                }
            });
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

// Navegação suave
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Efeito glitch no título
function initGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        setInterval(() => {
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = 'glitch 3s infinite';
            }, 10);
        }, 5000 + Math.random() * 3000);
    });
}

// Efeito de digitação
function initTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;
    
    const texts = [
        'Explore as fronteiras da tecnologia e inovação',
        'Descubra o futuro da computação',
        'Viva a experiência sci-fi completa',
        'Tecnologias que transformam o amanhã'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            subtitle.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            subtitle.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    typeText();
}

// Validação de formulário
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearErrors);
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField({ target: input })) {
                isValid = false;
            }
        });
        
        if (isValid) {
            showSuccessMessage();
        }
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remover erros anteriores
    removeFieldError(field);
    
    // Validação específica por tipo
    if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
            errorMessage = 'Por favor, insira um email válido';
            isValid = false;
        }
    } else if (field.hasAttribute('required') && !value) {
        errorMessage = 'Este campo é obrigatório';
        isValid = false;
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else if (value) {
        showFieldSuccess(field);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #ff00ff;
        font-size: 0.8rem;
        margin-top: 0.5rem;
        animation: fadeIn 0.3s ease;
    `;
    
    field.style.borderColor = '#ff00ff';
    field.parentNode.appendChild(errorElement);
}

function showFieldSuccess(field) {
    field.style.borderColor = '#00ffff';
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

function removeFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    field.style.borderColor = '';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.field-error');
    errorElements.forEach(error => error.remove());
}

// Animações de scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.about-card, .project-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
}

// Verificação de API
function initAPICheck() {
    fetch('/api/status')
        .then(response => response.json())
        .then(data => {
            console.log('🚀 Status da API:', data);
            
            // Mostrar status na interface (opcional)
            const statusElement = document.createElement('div');
            statusElement.className = 'api-status';
            statusElement.innerHTML = `
                <i class="fas fa-circle" style="color: #00ff00;"></i>
                Sistema Online
            `;
            statusElement.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: rgba(26, 26, 26, 0.9);
                padding: 0.5rem 1rem;
                border-radius: 20px;
                border: 1px solid #00ffff;
                font-size: 0.8rem;
                z-index: 1001;
                animation: slideIn 0.5s ease;
            `;
            
            document.body.appendChild(statusElement);
            
            // Remover após 5 segundos
            setTimeout(() => {
                statusElement.remove();
            }, 5000);
        })
        .catch(error => {
            console.log('⚠️ API não disponível:', error);
        });
}

// Mensagem de sucesso
function showSuccessMessage() {
    const button = document.querySelector('.contact-form button[type="submit"]');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-check"></i> Enviado com Sucesso!';
    button.style.background = '#00ff00';
    button.style.color = '#000';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
        button.style.color = '';
        
        // Limpar formulário
        document.querySelector('.contact-form').reset();
    }, 3000);
}

// Efeitos visuais adicionais
function addVisualEffects() {
    // Cursor trail
    let cursorTrail = [];
    
    document.addEventListener('mousemove', function(e) {
        cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        
        // Manter apenas os últimos 10 pontos
        if (cursorTrail.length > 10) {
            cursorTrail.shift();
        }
    });
    
    // Som ambiente (opcional)
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(80, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.001, audioContext.currentTime);
    
    // Tocar som ambiente muito baixo
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

// Adicionar CSS para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .field-error {
        animation: fadeIn 0.3s ease;
    }
`;
document.head.appendChild(style);