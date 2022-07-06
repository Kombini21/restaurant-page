import { restaurantHead, restaurantd1, restaurantd2, restaurantd3} from './pageLoad.js';
import { cleanPage } from './cleanPage.js';

//Import and alter the page elements in a function, then export

export function updateToContact() {
    cleanPage();

    var headContent = document.createElement('h2');
    headContent.setAttribute('id', 'headcontent');
    headContent.innerHTML = "Contact";
    restaurantHead.appendChild(headContent);

    var td1Content = document.createElement('p');
    td1Content.setAttribute('id','td1content');
    td1Content.innerHTML = 'You can find in, consectetur adipiscing elit. Nulla tincidunt in neque in gravida. Etiam volutpat vitae lorem sit amet tincidunt. Nulla tincidunt in neque in gravida. Etiam volutpat vitae lorem sit amet tincidunt. ';
    restaurantd1.appendChild(td1Content);



    var td2ContentHead = document.createElement('h2');
    td2ContentHead.setAttribute('id','td2contenthead');
    td2ContentHead.innerHTML = 'Telephone';

    var td2ContentFill = document.createElement('p');
    td2ContentFill.setAttribute('id','td2contentfill');
    td2ContentFill.innerHTML = ' +1-202-555-0146 <br>  +1 242-441-3387 <br>   +55 84 93189-2310  ';

    restaurantd2.appendChild(td2ContentHead);
    restaurantd2.appendChild(td2ContentFill);




    var td3ContentHead = document.createElement('h2');
    td3ContentHead.setAttribute('id', 'td3contenthead');
    td3ContentHead.innerHTML = 'Email';

    var td3ContentFill = document.createElement('p');
    td3ContentFill.setAttribute('id','td3contentfill');
    td3ContentFill.innerHTML = 'gabrielterrazas21@gmail.com <br> ';

    restaurantd3.appendChild(td3ContentHead);
    restaurantd3.appendChild(td3ContentFill);


};