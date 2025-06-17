


// Menu responsivo
function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("menu-open");
}


const texts = ["Desenvolvedora Front End", "Apaixonada por tecnologia", "Criando soluções web"]; // você pode adicionar mais frases aqui
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 75; 
const pauseAfterTyping = 1500;

const typingTextElement = document.getElementById("typing-text");

function typeText() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
 
    typingTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
  
      isDeleting = true;
      setTimeout(typeText, pauseAfterTyping);
    } else {
      setTimeout(typeText, typingSpeed);
    }
  } else {
 
    typingTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
  
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(typeText, deletingSpeed);
    }
  }
}


if (typingTextElement) {
  typeText();
}


const canvas = document.getElementById('sparkles-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const numParticles = 100;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createParticles() {
  particles = [];
  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      alpha: Math.random(),
      speed: Math.random() * 0.5 + 0.2
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(185, 166, 255, ${p.alpha})`; // Tom roxo-lilás claro
    ctx.fill();
  }
}

function updateParticles() {
  for (let p of particles) {
    p.y -= p.speed;
    if (p.y < 0) {
      p.y = canvas.height;
      p.x = Math.random() * canvas.width;
    }
  }
}

function animateParticles() {
  drawParticles();
  updateParticles();
  requestAnimationFrame(animateParticles);
}

createParticles();
animateParticles();

