class Game {
    constructor() {
        this.password = new Password();
        this.sounds = new Sounds();
        this.informAboutDefeat = () => {
            const alphabetContainer = document.querySelector("#alphabet");
            alphabetContainer.innerHTML = `<span class="victory">Przegrana! Prawidłowe hasło: 
            ${this.selectedPassword} <br/><br/><span class="reset" 
            onclick="location.reload()">JESZCZE RAZ?</span></span>`;
            this.lose.play();
        }
        this.hangMan = new HangMan(this.informAboutDefeat);
        this.selectedPassword = this.password.selectPassword();
        this.validator = new Validator(this.selectedPassword);
        this.keyboard = new Keyboard(this.validator);
        this.ok = this.sounds.ok;
        this.nok = this.sounds.nok;
        this.lose = this.sounds.lose;
        this.subscribe();
        this.draw();
    }
    draw() {
        this.password.drawHiddenPassword();
        this.keyboard.drawKeys()
        this.hangMan.drawNextImage();
    }
    subscribe() {
        this.validator.subscribe(Action.OK, figure => {
            this.password.showFigure(figure);          
        });
        this.validator.subscribe(Action.OK, () => {          
            this.ok.play();
        });
        this.validator.subscribe(Action.NOK, () => {
            this.hangMan.drawNextImage();
            this.nok.play();
        });
    }
}

const game = new Game();
