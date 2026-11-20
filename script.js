//Variablem
var isVisible_PopUp;
var isVisible_PopUp1;
var isVisible_PopUp2;
var isVisible_PopUp3;
var isVisible_PopUp4;
var isVisible_PopUp5;
var isVisible_PopUp6;

//PopUp Fenster
const popUp1 = document.getElementById("popup1");
const popUp2 = document.getElementById("popup2");
const popUp3 = document.getElementById("popup3");
const popUp4 = document.getElementById("popup4");
const popUp5 = document.getElementById("popup5");
const popUp6 = document.getElementById("popup6");

//Close Button PopUp
const closeBtn1 = document.getElementById("popup-close-btn1");
const closeBtn2 = document.getElementById("popup-close-btn2");
const closeBtn3 = document.getElementById("popup-close-btn3");
const closeBtn4 = document.getElementById("popup-close-btn4");
const closeBtn5 = document.getElementById("popup-close-btn5");
const closeBtn6 = document.getElementById("popup-close-btn6");

//Grid PopUp Preview
const gridItem1 = document.getElementById("grid-item1");
const gridItem2 = document.getElementById("grid-item2");
const gridItem3 = document.getElementById("grid-item3");
const gridItem4 = document.getElementById("grid-item4");
const gridItem5 = document.getElementById("grid-item5");
const gridItem6 = document.getElementById("grid-item6");

console.log("start script");


function changeVisibilityPopUp (popup, isVisible_PopUp) {
    console.log("changeVisibilityPopUp");
    if (isVisible_PopUp == 1) {
        popup.style.visibility = 'visible';
        popup.style.pointerEvents = 'all';
    }
    else {
        popup.style.visibility = 'hidden';
        popup.style.pointerEvents = 'none';
        console.log("hiding");
    }
}

//set invisible at start of site
function hideAllPopUps () {
    isVisible_PopUp1 = 0;
    changeVisibilityPopUp(popUp1, isVisible_PopUp1);

    isVisible_PopUp2 = 0;
    changeVisibilityPopUp(popUp2, isVisible_PopUp2);

    isVisible_PopUp3 = 0;
    changeVisibilityPopUp(popUp3, isVisible_PopUp3);

    isVisible_PopUp4 = 0;
    changeVisibilityPopUp(popUp4, isVisible_PopUp4);

    isVisible_PopUp5 = 0;
    changeVisibilityPopUp(popUp5, isVisible_PopUp5);

    isVisible_PopUp6 = 0;
    changeVisibilityPopUp(popUp6, isVisible_PopUp6);
}
hideAllPopUps();


//on click change visibility on
gridItem1.addEventListener('click', function() {
    if (isVisible_PopUp1 == 1) {
        isVisible_PopUp1 = 0;
    }
    else {
        isVisible_PopUp1 = 1;
    }
    changeVisibilityPopUp(popUp1, isVisible_PopUp1);
})
gridItem2.addEventListener('click', function() {
    if (isVisible_PopUp2 == 1) {
        isVisible_PopUp2 = 0;
    }
    else {
        isVisible_PopUp2 = 1;
    }
    changeVisibilityPopUp(popUp2, isVisible_PopUp2);
})
gridItem3.addEventListener('click', function() {
    if (isVisible_PopUp3 == 1) {
        isVisible_PopUp3 = 0;
    }
    else {
        isVisible_PopUp3 = 1;
    }
    changeVisibilityPopUp(popUp3, isVisible_PopUp3);
})
gridItem4.addEventListener('click', function() {
    if (isVisible_PopUp4 == 1) {
        isVisible_PopUp4 = 0;
    }
    else {
        isVisible_PopUp4 = 1;
    }
    changeVisibilityPopUp(popUp4, isVisible_PopUp4);
})
gridItem5.addEventListener('click', function() {
    if (isVisible_PopUp5 == 1) {
        isVisible_PopUp5 = 0;
    }
    else {
        isVisible_PopUp5 = 1;
    }
    changeVisibilityPopUp(popUp5, isVisible_PopUp5);
})
gridItem6.addEventListener('click', function() {
    if (isVisible_PopUp6 == 1) {
        isVisible_PopUp6 = 0;
    }
    else {
        isVisible_PopUp6 = 1;
    }
    changeVisibilityPopUp(popUp6, isVisible_PopUp6);
})

//on click close popups
closeBtn1.addEventListener('click', function(){
    hideAllPopUps();
})
closeBtn2.addEventListener('click', function(){
    hideAllPopUps();
})
closeBtn3.addEventListener('click', function(){
    hideAllPopUps();
})
closeBtn4.addEventListener('click', function(){
    hideAllPopUps();
})
closeBtn5.addEventListener('click', function(){
    hideAllPopUps();
})
closeBtn6.addEventListener('click', function(){
    hideAllPopUps();
})

//zwischen den Seiten wechseln
const nameLogo = document.getElementById('name-logo');
const home = document.getElementById('Home');
const datenbankensysteme = document.getElementById('Datenbankensysteme');
const softwareentwicklung = document.getElementById('Softwareentwicklung');
const design = document.getElementById('Design');
const modellierung = document.getElementById('Modellierung');

nameLogo.addEventListener('click', function(){
    window.location.href = 'index.html';
})

home.addEventListener('click', function(){
    window.location.href = 'index.html';
})

datenbankensysteme.addEventListener('click', function(){
    window.location.href = 'Datenbankensysteme.html';
})

softwareentwicklung.addEventListener('click', function(){
    window.location.href = 'Softwareentwicklung.html';
})

design.addEventListener('click', function(){
    window.location.href = 'Design.html';
})

modellierung.addEventListener('click', function(){
    window.location.href = 'Modellierung.html';
})