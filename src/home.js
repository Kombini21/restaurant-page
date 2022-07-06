import { restaurantHead, restaurantd1, restaurantd2, restaurantd3} from './pageLoad.js';
import { cleanPage } from './cleanPage.js';

//Import and create the page elements in a function, then export
export function updateToHome() {
    cleanPage();
    
    var headContent = document.createElement('h2');
    headContent.setAttribute('id', 'headcontent');
    headContent.innerHTML = "Kombini Bed and Breakfast";
    restaurantHead.appendChild(headContent);

    var td1Content = document.createElement('p');
    td1Content.setAttribute('id','td1content');
    td1Content.innerHTML = 'This is the best bed and breakfast availabe, consectetur adipiscing elit. Nulla tincidunt in neque in gravida. Etiam volutpat vitae lorem sit amet tincidunt. Nulla tincidunt in neque in gravida. Etiam volutpat vitae lorem sit amet tincidunt. ';
    restaurantd1.appendChild(td1Content);



    var td2ContentHead = document.createElement('h2');
    td2ContentHead.setAttribute('id','td2contenthead');
    td2ContentHead.innerHTML = 'Hours';

    var td2ContentFill = document.createElement('p');
    td2ContentFill.setAttribute('id','td2contentfill');
    td2ContentFill.innerHTML = '|| Sunday 6:00 - 23:00 ||  Monday 6:00 - 23:00 || <br> || Tuesday 6:00 - 18:00 || Wednesday 7:00 - 20:00 || <br>  || Thursday 6:00 - 21:00 ||  Friday 5:00 - 14:00 || <br>|| Saturday 7:00 - 15:00 ||';

    restaurantd2.appendChild(td2ContentHead);
    restaurantd2.appendChild(td2ContentFill);




    var td3ContentHead = document.createElement('h2');
    td3ContentHead.setAttribute('id', 'td3contenthead');
    td3ContentHead.innerHTML = 'Location';

    var td3ContentFill = document.createElement('p');
    td3ContentFill.setAttribute('id','td3contentfill');
    td3ContentFill.innerHTML = 'Sainte-Flaive-des-Loups, France';

    restaurantd3.appendChild(td3ContentHead);
    restaurantd3.appendChild(td3ContentFill);

};



;
