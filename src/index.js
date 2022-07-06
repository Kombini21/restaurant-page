import './style.css';

import './pageLoad.js';
import { updateToHome } from './home.js';
import { cleanPage } from './cleanPage.js';
import { updateToMenu } from './menu.js';
import { updateToContact } from './contact.js';

var btbt1 = document.getElementById('bt1');
var btbt2 = document.getElementById('bt2');
var btbt3 = document.getElementById('bt3');

btbt1.innerHTML = 'Home'
btbt2.innerHTML = 'Menu'
btbt3.innerHTML = 'Contact'

btbt1.addEventListener("click", updateToHome);
btbt2.addEventListener("click", updateToMenu);
btbt3.addEventListener("click", updateToContact);

updateToHome();



var bottomText = document.createElement('h4');
bottomText.setAttribute('id', 'bottomtext');
bottomText.innerHTML = 'Made by Gabriel Terrazas - kb';

document.getElementById('bottom').appendChild(bottomText);










