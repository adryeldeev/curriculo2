const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item a'); // Seleciona todos os links da navegação

navToggle.addEventListener('click', () => {
    navList.classList.toggle('nav__list--active');
    // Troca o ícone de hambúrguer para X e vice-versa
    navToggle.querySelector('i').classList.toggle('fa-bars');
    navToggle.querySelector('i').classList.toggle('fa-times');
});

// Fechar o menu ao clicar em um item da lista (navegação)
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navList.classList.remove('nav__list--active');
        // Volta o ícone para hambúrguer quando o menu é fechado
        navToggle.querySelector('i').classList.remove('fa-times');
        navToggle.querySelector('i').classList.add('fa-bars');
    });
});