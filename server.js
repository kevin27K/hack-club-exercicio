const menu = document.querySelector('#menu');
const menuNav = document.querySelector('.menu-nav');
const menuHamburguer = document.querySelector('.menu-hamburguer');

let menuEstado = false;

menu.addEventListener('click', () => {
	if (!menuEstado) {
		menuEstado = true;
		menuNav.style.display = 'flex';
	} else {
		menuEstado = false;
		menuNav.style.display = 'none';
	}
})

