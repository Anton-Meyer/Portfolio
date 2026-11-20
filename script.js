var isVisible_PopUp1 = 0;

const PopUp1 = document.getElementById("popup1");

function changeVisibilityPopUp (popup, isVisible_PopUp) {
    console.log("changeVisibilityPopUp");
    if (isVisible_PopUp == 1) {
        popup.style.visibility = 'visible';
    }
    else {
        popup.style.visibility = 'hidden';
        console.log("hiding");
    }
}

changeVisibilityPopUp(PopUp1, isVisible_PopUp1);