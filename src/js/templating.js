import itemsTemplate from '../templates/menu-items.hbs';
import meals from '../menu.json';
const markup = itemsTemplate(meals);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);