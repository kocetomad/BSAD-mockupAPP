function elementHide(element, boolean) {

    if (boolean) {
        // true - hide element
        element.style.display = "none";
    } else {
        // false - un-hide element
        element.style.display = "block";
    }
}

function formLock(form, boolean) {
    if (boolean) {
        // true - disable form
        form.setAttribute("disabled", "");
    } else {
        // false - enable form
        form.removeAttribute("disabled");
    }
}

function showHideReasonBox() {
    if (reasonBoxHidden) {
        reasonBoxHidden = false;
        document.getElementById("reasonBox").style = "display: block;";
    } else {
        reasonBoxHidden = true;
        document.getElementById("reasonBox").style = "display: none;";
    }
}

function formReturn() {
    document.getElementById("newIncidentFormDescription").value = " ";
    document.getElementById("submitText").style.display = "inline";
    setTimeout(returnToHome, 3000);
}

function returnToHome() {
    location.href = "../../index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    // Execute after page has loaded completely


});
