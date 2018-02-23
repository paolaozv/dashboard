let burguerButton = document.getElementById('burguer-button');
let menu = document.getElementById('menu');
let close = document.getElementById('close');

burguerButton.addEventListener('touchstart', toggleMenu);
burguerButton.addEventListener('click', toggleMenu);
close.addEventListener('click', hideMenu);
close.addEventListener('touchstart', hideMenu);

function toggleMenu() {
  menu.classList.add('active');
};

function hideMenu() {
  menu.classList.remove('active');
}