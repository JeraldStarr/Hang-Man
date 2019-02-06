class HangMan {
    constructor() {
        this._fails = 0;
        const _hangManImage = document.querySelector("#gibbet img");
        this.drawNextImage = () => {
            _hangManImage.src = `/img/s${this._fails}.png`;
        }
        this.failed = () => {
            const password = new Password();
            this._fails++;
            this.drawNextImage();
            password.displayLossMessage(this._fails);
        }
    }
}
