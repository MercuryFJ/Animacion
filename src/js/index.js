// Seleccionamos todas las tarjetas
const cards = document.querySelectorAll('#card');

// Creamos el observer para detectar cuando las tarjetas son visibles
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const card = entry.target;
      
      // Añadir clase de visibilidad
      card.classList.add('visible');
      
      // Animaciones para imagen
      const lightImage = card.querySelector('img[id$="Light"]');
      if (lightImage) {
        lightImage.style.animationPlayState = 'running';
      }
      
      // Animaciones para texto
      const paragraphs = card.querySelectorAll('.p-container p');
      paragraphs.forEach(p => {
        p.style.animationPlayState = 'running';
      });
      
      // Animación de letras
      const h3 = card.querySelector('h3.wavy');
      if (h3) {
        const spans = h3.querySelectorAll('span');
        spans.forEach(span => {
          span.style.animationPlayState = 'running';
        });
      }
      
      // Deja de observar la tarjeta después de que entre en el viewport
      observer.unobserve(card);
    }
  });
}, {
  threshold: 0.1 // Dispara la animación cuando una pequeña parte de la tarjeta es visible
});

// Preparar las tarjetas antes de observarlas
cards.forEach(card => {
  // Pausar todas las animaciones inicialmente
  const lightImage = card.querySelector('img[id$="Light"]');
  if (lightImage) {
    lightImage.style.animationPlayState = 'paused';
  }
  
  const paragraphs = card.querySelectorAll('.p-container p');
  paragraphs.forEach(p => {
    p.style.animationPlayState = 'paused';
  });
  
  const h3 = card.querySelector('h3.wavy');
  if (h3) {
    const spans = h3.querySelectorAll('span');
    spans.forEach(span => {
      span.style.animationPlayState = 'paused';
    });
  }
  
  // Comenzar a observar cada tarjeta
  observer.observe(card);
});

// Seleccionar el contenedor del título
const titleContainer = document.querySelector('.title-container');

// Crear el observer para detectar visibilidad del contenedor
const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Añadir clase para activar la animación
      entry.target.querySelector('.animated-title').classList.add('visible');
      
      // Detener la observación después de activar la animación
      titleObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 // Dispara la animación cuando el 50% del contenedor sea visible
});

// Iniciar la observación del contenedor
titleObserver.observe(titleContainer);
