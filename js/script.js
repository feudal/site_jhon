const menu_b = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu');

function my_toggle() {
	if(menu.classList.contains('active')) {
		menu.classList.remove('active');
		menu_b.classList.add('rotate-center');
		setTimeout(() => {  menu_b.classList.remove('rotate-center'); }, 1000);
	}
	else {
		menu.classList.add('active');
		menu_b.classList.add('rotate-center-reverse');
		setTimeout(() => {  menu_b.classList.remove('rotate-center-reverse'); }, 1000);

	}
}

menu_b.addEventListener('click', my_toggle);
