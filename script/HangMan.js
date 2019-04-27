class HangMan {
    constructor(showFailedMessage) {
        this._fails = -1;
        this._hangManImage = document.querySelector("#gibbet img");
        this._showFailedMessage = showFailedMessage;
        this._failed = () => {
             const NUMBER_OF_FAILS = 9;
             if (this._fails >= NUMBER_OF_FAILS) {
                this._showFailedMessage();
             }
         }
    }
    drawNextImage() {
        this._fails++;
        this._hangManImage.src = `/img/s${this._fails}.png`;
        this._failed();
    }
}
