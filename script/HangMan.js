class HangMan {
    constructor() {
        this._fails = 0;
<<<<<<< HEAD
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
=======
        this._hangManImage = document.querySelector("#gibbet img");
        this._failed = () => {
            const alphabetContainer = document.querySelector("#alphabet");
             const NUMBER_OF_FAILS = 9;
             if (this._fails >= NUMBER_OF_FAILS) {
                 alphabetContainer.innerHTML = `Przegrana! Prawidłowe hasło: 
                 ${game.password._selectedPassword} <br/><br/><span class="reset" 
                 onclick="location.reload()">JESZCZE RAZ?</span>`;
             }
         }
    }
    drawNextImage() {
        this._fails++;
        this._hangManImage.src = `/img/s${this._fails}.png`;
        this._failed();
>>>>>>> hangMan
    }
}
