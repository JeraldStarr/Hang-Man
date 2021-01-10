class HangMan {
    constructor(informAboutDefeat) {
        this._fails = -1;
        this._hangManImage = document.querySelector("#gibbet img");
        this._informAboutDefeat = informAboutDefeat;
        this._failed = () => {
            const NUMBER_OF_FAILS = 9;
            if (this._fails >= NUMBER_OF_FAILS) {
                this._informAboutDefeat();
            }
        }
    }
    drawNextImage() {
        this._fails++;
        this._hangManImage.src = `img/s${this._fails}.png`;
        this._failed();
    }
}
