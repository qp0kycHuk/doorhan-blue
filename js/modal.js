// Ширина скролла
const html = document.querySelector('html');
let documentWidth = parseInt(document.documentElement.clientWidth);
let windowsWidth = parseInt(window.innerWidth);
let scrollbarWidth = windowsWidth - documentWidth;

// Мобильное меню
const burger = document.querySelector('#burger');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-listing');
const menuContact = document.querySelector('.menu-contact');
const line_1 = document.querySelector('.line-1');
const line_2 = document.querySelector('.line-2');
const line_3 = document.querySelector('.line-3');
const nav = document.querySelector('.nav');
menu.style.top = `${nav.offsetHeight}px`;
menu.style.visibility = "hidden";
burger.addEventListener('click', () => {
	if(menu.style.visibility == "hidden"){
		html.style.overflow = "hidden";
		html.style.marginRight = scrollbarWidth + "px";
		menu.style.visibility = "visible";
		menu.style.width = "100%";
		menu.style.opacity = "1";
		menuList.style.left = "20px";
		menuContact.style.top = "60px";
		menuContact.style.opacity = "1";
		line_1.classList.add('line-x-1');
        line_2.classList.add('line-x-2');
        line_3.classList.add('line-x-3');
	}else{
		html.style.overflow = "visible";
		html.style.marginRight = "0";
		menu.style.visibility = "hidden";
		menu.style.width = "0";
		menu.style.opacity = "0";
		menuList.style.left = "-200px";
		menuContact.style.top = "80px";
		menuContact.style.opacity = "0";
		line_1.classList.remove('line-x-1');
        line_2.classList.remove('line-x-2');
        line_3.classList.remove('line-x-3');
	}
});

// Разворачивающее меню на главной
document.addEventListener('click', (event) => {
	if(event.target.classList.contains('menu-listing-menu')){
		let subMenu = event.target.nextElementSibling;
		let arrow = event.target.querySelector('.gates-submenu__arrow');
		if(!subMenu.classList.contains('gates-submenu-visibility')){
			subMenu.classList.add('gates-submenu-visibility');
			arrow.classList.add('gates-arrow__transform');
		}else{
			subMenu.classList.remove('gates-submenu-visibility');
			arrow.classList.remove('gates-arrow__transform');
		}
	}
	if(!event.target.classList.contains('menu-listing-menu') && event.target.classList.contains('menu-listing-menu__link')){
		html.style.overflow = "visible";
		html.style.marginRight = "0";
		menu.style.visibility = "hidden";
		menu.style.width = "0";
		menu.style.opacity = "0";
		menuList.style.left = "-200px";
		menuContact.style.top = "80px";
		menuContact.style.opacity = "0";
		line_1.classList.remove('line-x-1');
        line_2.classList.remove('line-x-2');
        line_3.classList.remove('line-x-3');
	}
});