import { restaurantHead, restaurantd1, restaurantd2, restaurantd3} from './pageLoad.js';
import { cleanPage } from './cleanPage.js';

//Import and alter the page elements in a function, then export 
export function updateToMenu() {
    cleanPage();
    var headContent = document.createElement('h2');
    headContent.setAttribute('id', 'headcontent');
    headContent.innerHTML = "Menu";
    restaurantHead.appendChild(headContent);

    var td1Content = document.createElement('p');
    td1Content.setAttribute('id','td1content');
    td1Content.innerHTML = 'We have a big variety of food, consectetur adipiscing elit. Nulla tincidunt in neque in gravida. Etiam volutpat vitae lorem sit amet tincidunt. Nulla tincidunt in neque in gravida. Etiam volutpat vitae lorem sit amet tincidunt.';
    restaurantd1.appendChild(td1Content);



    var td2ContentHead = document.createElement('h2');
    td2ContentHead.setAttribute('id','td2contenthead');
    td2ContentHead.innerHTML = 'Food';

    var td2ContentFill = document.createElement('p');
    td2ContentFill.setAttribute('id','td2contentfill');
    td2ContentFill.innerHTML = 'Treacle and millet muffins, Kielbasa and pork salad, Honey and raisin muffins, Mascarpone and nectarine salad, Broccoli and cuttlefish salad, Phyllo and custard pie.';

    restaurantd2.appendChild(td2ContentHead);
    restaurantd2.appendChild(td2ContentFill);




    var td3ContentHead = document.createElement('h2');
    td3ContentHead.setAttribute('id', 'td3contenthead');
    td3ContentHead.innerHTML = 'Drinks';

    var td3ContentFill = document.createElement('p');
    td3ContentFill.setAttribute('id','td3contentfill');
    td3ContentFill.innerHTML = 'Kilted Trickster Flash, Lincolns Haze Cosmo, Siracha Magic Sour, Fizzy Gangster Stunner.';

    restaurantd3.appendChild(td3ContentHead);
    restaurantd3.appendChild(td3ContentFill);
}