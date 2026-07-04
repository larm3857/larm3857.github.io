/* =========================================================
   MENÚ MÓVIL
   ========================================================= */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Cierra el menú al elegir una sección (útil en móvil)
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* =========================================================
   ROTACIÓN SUAVE DE ROLES EN EL HERO (fade, sin efecto terminal)
   Respeta prefers-reduced-motion mostrando el texto directo.
   ========================================================= */
const typedEl = document.getElementById('typedText');
const roles = [
  'Desarrollo de software',
  'Redes y conectividad',
  'Bases de datos',
  'Diseño de interfaces'
];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  typedEl.textContent = roles.join(' · ');
} else {
  let roleIndex = 0;
  typedEl.textContent = roles[0];
  typedEl.style.transition = 'opacity 300ms ease';

  setInterval(() => {
    typedEl.style.opacity = 0;
    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      typedEl.textContent = roles[roleIndex];
      typedEl.style.opacity = 1;
    }, 300);
  }, 2200);
}

/* =========================================================
   LÍNEA DE TIEMPO INTERACTIVA (Sobre mí)
   ========================================================= */
document.querySelectorAll('.timeline__toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.timeline__item');
    const expanded = item.classList.toggle('is-expanded');
    btn.setAttribute('aria-expanded', expanded);
    btn.textContent = expanded ? 'Ver menos' : 'Ver más';
  });
});

/* =========================================================
   MODALES DE PROYECTOS (Ver caso de estudio)
   ========================================================= */
const projectTriggers = [
  { cardId: 'card-gimnasio', modalId: 'modal-gimnasio' },
  { cardId: 'card-microempresa', modalId: 'modal-microempresa' },
  { cardId: 'card-roblox', modalId: 'modal-roblox' }
];

let lastFocusedEl = null;

function openModal(modal) {
  lastFocusedEl = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  const closeBtn = modal.querySelector('.modal__close');
  if (closeBtn) closeBtn.focus();
}

function closeModal(modal) {
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocusedEl) lastFocusedEl.focus();
}

projectTriggers.forEach(({ cardId, modalId }) => {
  const card = document.getElementById(cardId);
  const modal = document.getElementById(modalId);
  if (!card || !modal) return;

  card.addEventListener('click', (e) => {
    // El botón de "guardar" (corazón) no debe abrir el modal
    if (e.target.closest('.project-card__save')) return;
    openModal(modal);
  });

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(modal);
    }
  });

  const closeBtn = modal.querySelector('.modal__close');
  closeBtn.addEventListener('click', () => closeModal(modal));

  // Cerrar al hacer click fuera de la tarjeta del modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modal);
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.modal-overlay:not([hidden])').forEach((modal) => closeModal(modal));
});

/* =========================================================
   FORMULARIO DE CONTACTO
   No hay backend en este sitio estático, así que al enviar
   se abre el cliente de correo del usuario con el mensaje
   ya redactado, listo para mandar a tu correo.
   ========================================================= */
const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

// ⚠️ Reemplaza este correo por el tuyo real
const CONTACT_EMAIL = 'tuemail@ejemplo.com';

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    const subject = encodeURIComponent(`Contacto desde el portafolio — ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\n${message}`);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    contactStatus.textContent = 'Abriendo tu cliente de correo con el mensaje listo para enviar…';
    contactForm.reset();
  });
}

/* =========================================================
   AÑO ACTUAL EN EL FOOTER
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();
