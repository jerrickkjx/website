var password = "eaglene";

function passcheck() {

    if(document.getElementById('password').value != password) {

return false;
}

if (document.getElementById('password').value == password) {
    MessageEvent("Click Ok to continue.");
}
}