import { restaurantHead, restaurantd1, restaurantd2, restaurantd3} from './pageLoad.js';

//Import and alter the page elements, then export function
export function cleanPage(){

    restaurantHead.innerHTML = "";
    restaurantd1.innerHTML = "";
    restaurantd2.innerHTML = '';
    restaurantd3.innerHTML = '';

};

