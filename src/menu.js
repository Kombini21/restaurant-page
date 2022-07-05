import { restaurantHead, restaurantd1, restaurantd2, restaurantd3} from './pageLoad.js';

//Import and alter the page elements in a function, then export 
export function updateToMenu() {
    restaurantHead.innerHTML = "Menu";
    restaurantd1.innerHTML = "Bebidas";
    restaurantd2.innerHTML = 'Comidas';
    restaurantd3.innerHTML = 'Lanches';
}