import BG from './bg1.png';

// create default page elements

var restaurantHeader = document.createElement('div');
restaurantHeader.setAttribute('id', 'heading');


var headerButton1 = document.createElement('button');
headerButton1.setAttribute('id','bt1');

var headerButton2 = document.createElement('button');
headerButton2.setAttribute('id', 'bt2');

var headerButton3 = document.createElement('button');
headerButton3.setAttribute('id','bt3');

var restaurantBottom = document.createElement('div');
restaurantBottom.setAttribute('id', 'bottom');


//Create page new elements and export

export var restaurantContainer = document.createElement('div');
restaurantContainer.setAttribute('id', 'restContainer');


export var restaurantHead = document.createElement('div');
restaurantHead.setAttribute('id', 'header');

export var restaurantd1 = document.createElement('div');
restaurantd1.setAttribute('id', 'td1');

export var restaurantd2 = document.createElement('div');
restaurantd2.setAttribute('id', 'td2');

export var restaurantd3 = document.createElement('div');
restaurantd3.setAttribute('id', 'td3');



//Load html container

var container = document.getElementById('content');

//Load imported image

const myBg = new Image();
myBg.src = BG;

// Append elements to header

restaurantHeader.appendChild(headerButton1);
restaurantHeader.appendChild(headerButton2);
restaurantHeader.appendChild(headerButton3);

// Append elements to html container

container.appendChild(restaurantHeader);
container.appendChild(restaurantContainer);
restaurantContainer.appendChild(restaurantHead);
restaurantContainer.appendChild(restaurantd1);
restaurantContainer.appendChild(restaurantd2);
restaurantContainer.appendChild(restaurantd3);
container.appendChild(restaurantBottom);



