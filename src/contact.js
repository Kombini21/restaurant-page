import { restaurantHead, restaurantd1, restaurantd2, restaurantd3} from './pageLoad.js';

//Import and alter the page elements in a function, then export

export function updateToContact() {

    restaurantHead.innerHTML = "Contact Us";
    restaurantd1.innerHTML = "Cellphone";
    restaurantd2.innerHTML = 'Mail';
    restaurantd3.innerHTML = 'Card';

};