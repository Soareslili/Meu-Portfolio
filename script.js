// Menu responsivo 

function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("menu-open");
}


// Animação do Texto Front End
const text = "Desenvolvedora Front End";
const typingTextElement = document.getElementById("typing-text");

let index = 0;
let isDeleting = false; // Controla se está apagando o texto

function typeText() {
    if (!isDeleting && index < text.length) {
        // Escrevendo o texto
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 200); // Velocidade de digitação
    } else if (isDeleting && index > 0) {
        // Apagando o texto
        typingTextElement.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(typeText, 100); // Velocidade de apagamento
    } else {
        // Alterna entre escrevendo e apagando
        isDeleting = !isDeleting;
        setTimeout(typeText, 500); // Pausa antes de começar a próxima fase
    }
}

// Inicia a animação
typeText();




// Botão para retornar ao topo 

// Seleciona o botão
const backToTopButton = document.getElementById('backToTop');

// Mostra o botão quando o usuário rolar para baixo
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Rola para o topo da página quando o botão é clicado
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
