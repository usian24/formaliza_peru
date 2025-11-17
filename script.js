// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    }
}

// Toggle mobile menu
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
        
        // Toggle icons
        if (mobileMenu.classList.contains('active')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    }
}

// Open WhatsApp
function openWhatsApp() {
    const phoneNumber = '+51944144257';
    const message = encodeURIComponent('Hola, me gustaría obtener asesoría laboral gratuita.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// ===== FUNCIONALIDAD PARA RECURSOS =====
const recursosContent = {
    'guia-formalizacion': {
        titulo: 'Guía: Cómo formalizarte paso a paso',
        tipo: 'guia',
        contenido: `
            <div class="recurso-detalle">
                <div class="recurso-imagen">
                    <img src="formalizar.png" alt="Guía de formalización paso a paso" style="width: 100%; max-width: 400px; border-radius: 8px;">
                </div>
                <div class="recurso-pasos">
                    <h3>Pasos para Formalizarte:</h3>
                    <div class="paso">
                        <strong>Paso 1:</strong> Obtener tu RUC en SUNAT (gratis y rápido)
                    </div>
                    <div class="paso">
                        <strong>Paso 2:</strong> Elegir tu tipo de renta (cuarta o cuarta-quinta categoría)
                    </div>
                    <div class="paso">
                        <strong>Paso 3:</strong> Emitir recibos por honorarios
                    </div>
                    <div class="paso">
                        <strong>Paso 4:</strong> Afiliarte a un sistema de pensiones (opcional) o usar SIS para salud
                    </div>
                    <div class="paso">
                        <strong>Paso 5:</strong> Cumplir con tus obligaciones tributarias mensuales
                    </div>
                    <div class="paso">
                        <strong>Beneficios:</strong> Acceso a créditos, protección social, estabilidad laboral y derechos garantizados
                    </div>
                </div>
            </div>
        `
    },
    'guia-despido': {
        titulo: 'Guía: Qué hacer ante un despido injusto',
        tipo: 'video',
        contenido: `
            <div class="recurso-videos">
                <div class="video-thumbnail-grid">
                    <div class="video-thumbnail-item">
                        <div class="video-thumbnail" onclick="window.open('https://www.youtube.com/watch?v=iN2X4tA1H9U', '_blank')" style="background-image: url('despido.png'); background-size: cover; background-position: center;">
                            <div class="play-button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </div>
                        </div>
                        <div class="video-thumbnail-content">
                            <h4>Procedimiento ante Despido Injusto</h4>
                            <p>Aprende los pasos a seguir y tus derechos cuando enfrentas un despido injustificado</p>
                            <a href="https://www.youtube.com/watch?v=iN2X4tA1H9U" target="_blank" class="video-thumbnail-link">
                                Ver en YouTube
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="video-thumbnail-item">
                        <div class="video-thumbnail" onclick="window.open('https://www.youtube.com/watch?v=VQGGscjMIj8', '_blank')" style="background-image: url('derechos_laborales.png'); background-size: cover; background-position: center;">
                            <div class="play-button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </div>
                        </div>
                        <div class="video-thumbnail-content">
                            <h4>Derechos Laborales en Caso de Despido</h4>
                            <p>Conoce todos los beneficios y compensaciones que te corresponden por ley</p>
                            <a href="https://www.youtube.com/watch?v=VQGGscjMIj8" target="_blank" class="video-thumbnail-link">
                                Ver en YouTube
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="recurso-info">
                    <h4>📝 Acciones inmediatas ante despido injusto</h4>
                    <ul>
                        <li><strong>No firmes nada</strong> sin entenderlo completamente</li>
                        <li><strong>Documenta todo</strong> - contratos, boletas, comunicaciones</li>
                        <li><strong>Busca asesoría legal</strong> inmediatamente</li>
                        <li><strong>Acude a SUNAFIL</strong> o Ministerio de Trabajo</li>
                        <li><strong>Exige tus beneficios</strong> sociales completos</li>
                    </ul>
                </div>
            </div>
        `
    },
    'videos-educativos': {
    titulo: 'Videos educativos: Derechos laborales explicados en un minuto',
    tipo: 'video',
    contenido: `
        <div class="recurso-videos">
            <div class="video-single-container">
                <div class="video-thumbnail-item video-thumbnail-single">
                    <div class="video-thumbnail" onclick="window.open('https://www.youtube.com/watch?v=IlK1XqG9Dgw', '_blank')" style="background-image: url('derechos_basicos.png'); background-size: cover; background-position: center;">
                        <div class="play-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                        </div>
                    </div>
                    <div class="video-thumbnail-content">
                        <h4>Derechos Laborales Básicos</h4>
                        <p>Conoce tus derechos fundamentales como trabajador en Perú - explicado en 1 minuto</p>
                        <a href="https://www.youtube.com/watch?v=IlK1XqG9Dgw" target="_blank" class="video-thumbnail-link">
                            Ver en YouTube
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="recurso-info">

                <p>Al hacer clic en el video, se abrirá YouTube en una nueva pestaña donde podrás ver el contenido completo. ¡No te pierdas esta valiosa información!</p>
            </div>
        </div>
    `
},
    'preguntas-frecuentes': {
        titulo: 'Preguntas frecuentes: Respuestas a las dudas laborales más comunes',
        tipo: 'faq',
        contenido: `
            <div class="recurso-faq">
                ${generateFAQ()}
            </div>
        `
    }
};

function generateFAQ() {
    const faqs = [
        {
            pregunta: "¿Qué significa formalizarme laboralmente?",
            respuesta: "Formalizarte significa estar registrado ante las autoridades (SUNAT, ESSALUD, MTPE) y contar con un contrato, beneficios laborales, protección social y obligaciones tributarias claras. Te permite trabajar con derechos y acceder a servicios como salud y pensión."
        },
        {
            pregunta: "¿Qué beneficios obtengo al estar formalizado?",
            respuesta: "Al formalizarte accedes a: Seguro de salud (ESSALUD o SIS dependiendo del régimen), Aportes a pensión (ONP o AFP), CTS, gratificaciones, vacaciones y otros beneficios según régimen, Acceso a créditos y servicios bancarios, Mayor estabilidad y protección frente a abusos laborales."
        },
        {
            pregunta: "¿Cuáles son mis derechos como trabajador formal?",
            respuesta: "Derecho a un contrato, pago puntual, vacaciones, gratificaciones, CTS, seguro de salud, afiliación a pensión, jornada máxima de trabajo, horas extras pagadas y protección contra despidos arbitrarios."
        },
        {
            pregunta: "¿Cómo puede formalizarse un trabajador independiente?",
            respuesta: "Debe: Obtener un RUC en SUNAT (gratis y rápido), Elegir un tipo de renta (cuarta o cuarta-quinta), Emitir recibos por honorarios, Afiliarse a un sistema de pensiones si desea, o usar el SIS para salud."
        },
        {
            pregunta: "¿Cómo formalizo a mis trabajadores si tengo un negocio?",
            respuesta: "Debes: Registrar tu empresa en SUNAT (RUC), Inscribir a tus trabajadores en planilla, Afiliarlos a ESSALUD y a un sistema de pensiones (AFP/ONP), Cumplir con beneficios laborales según el régimen (MYPE, General, Agrario, etc.)."
        },
        {
            pregunta: "¿Qué pasa si trabajo sin contrato?",
            respuesta: "Sigues teniendo derechos, pero es más difícil reclamarlos. Puedes exigir que te formalicen. El empleador puede ser sancionado si te mantiene en informalidad."
        },
        {
            pregunta: "¿Qué regímenes laborales existen para las empresas?",
            respuesta: "Los principales son: Régimen General, Régimen Especial de la MYPE (REMYPE): Microempresa y Pequeña Empresa, Régimen Agrario, Régimen de Construcción Civil, Hogar (trabajadoras del hogar), Cada uno tiene beneficios y obligaciones distintas."
        },
        {
            pregunta: "¿Es obligatorio afiliarse a una AFP u ONP?",
            respuesta: "Sí, si eres trabajador dependiente en planilla. Si eres independiente, la afiliación es opcional."
        },
        {
            pregunta: "¿Qué beneficios tiene formalizar a mis trabajadores si tengo una pequeña empresa?",
            respuesta: "Evitas multas de SUNAFIL, Tienes acceso a programas del Estado, créditos y apoyo para MYPE, Aumentas la confianza de clientes y proveedores, Reduces rotación laboral."
        },
        {
            pregunta: "¿Dónde puedo denunciar si no me quieren formalizar?",
            respuesta: "Puedes denunciar en: SUNAFIL (presencial o vía web), Ministerio de Trabajo (MTPE), Centros MAC y Plataformas de Atención del Estado."
        }
    ];

    return faqs.map((faq, index) => `
        <div class="faq-item">
            <button class="faq-question" onclick="toggleFAQ(${index})">
                <span>${faq.pregunta}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </button>
            <div class="faq-answer" id="faq-answer-${index}">
                <p>${faq.respuesta}</p>
            </div>
        </div>
    `).join('');
}

function openRecurso(recursoId) {
    const recurso = recursosContent[recursoId];
    if (!recurso) return;

    const modal = document.createElement('div');
    modal.className = 'recurso-modal';
    modal.innerHTML = `
        <div class="recurso-modal-content">
            <div class="recurso-modal-header">
                <h2>${recurso.titulo}</h2>
                <button class="recurso-modal-close" onclick="closeRecurso()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="recurso-modal-body">
                ${recurso.contenido}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeRecurso() {
    const modal = document.querySelector('.recurso-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }, 300);
    }
}

function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const question = answer.previousElementSibling;
    
    answer.classList.toggle('active');
    question.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    if (mobileMenu && 
        mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(event.target) && 
        !menuToggle.contains(event.target)) {
        toggleMenu();
    }
    
    const modal = document.querySelector('.recurso-modal');
    if (modal && event.target === modal) {
        closeRecurso();
    }
});

// Cerrar modal con ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeRecurso();
    }
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .nav-mobile-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        link.style.backgroundColor = '';
        
        if (link.textContent.toLowerCase().includes(current)) {
            link.style.color = '#d97706';
            link.style.backgroundColor = '#fef3c7';
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Configurar event listeners para los botones de recursos
    const recursoButtons = document.querySelectorAll('.recurso-link');
    const recursoIds = ['guia-formalizacion', 'guia-despido', 'videos-educativos', 'preguntas-frecuentes'];
    
    recursoButtons.forEach((button, index) => {
        button.onclick = () => openRecurso(recursoIds[index]);
    });
    
    // Observar también las cards de recursos para animación
    const cards = document.querySelectorAll('.card, .card-beneficio, .step-card, .process-card, .recurso-card, .ods-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// ===== SECCIÓN DE PARTICIPANTES =====
function createParticipantesSection() {
    const participantes = [
        {
            nombre: "Becerra Fernandez, Anghelo Josue",
            telefono: "944144257",
            icono: "👨‍💻"
        },
        {
            nombre: "Carbajal Zevallos, Franzuat Alessandra", 
            telefono: "934141482",
            icono: "👩‍💼"
        },
        {
            nombre: "Castro Alva, Julio Isaias",
            telefono: "945344955",
            icono: "👨‍⚖️"
        }
    ];

    const participantesSection = document.createElement('section');
    participantesSection.id = 'participantes';
    participantesSection.className = 'section-white';
    participantesSection.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Nuestro Equipo</h2>
                <p class="section-description">
                    Conoce al equipo detrás de Formaliza Perú - jóvenes comprometidos con la justicia laboral y el desarrollo de nuestro país.
                </p>
            </div>

            <div class="participantes-grid">
                ${participantes.map(participante => `
                    <div class="participante-card">
                        <div class="participante-avatar">
                            <span class="participante-icon">${participante.icono}</span>
                        </div>
                        <div class="participante-info">
                            <h3>${participante.nombre}</h3>
                            <div class="participante-contacto">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <span>${participante.telefono}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="callout-amber">
                <p>
                    <strong>Juntos trabajamos</strong> para hacer de Perú un país con mayor justicia laboral y oportunidades para todos.
                </p>
            </div>
        </div>
    `;

    // Insertar antes del footer
    const footer = document.querySelector('.footer');
    document.body.insertBefore(participantesSection, footer);
}

// Llamar a la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', createParticipantesSection);