const start = () => {
    drawHiddenStatement();
    document.getElementById("alphabet").innerHTML = keyboard.drawKeys();
    displayStatement();
}
