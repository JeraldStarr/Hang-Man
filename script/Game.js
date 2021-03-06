class Game {
    constructor() {
        this.password = new Password();
        this.sounds = new Sounds();
        this.informAboutDefeat = () => {
            const alphabetContainer = document.querySelector("#alphabet");
            alphabetContainer.innerHTML = `<span class="victory">Przegrana! Prawidłowe hasło: 
            ${this.selectedPassword} <br/><br/><span class="reset" 
            onclick="location.reload()">JESZCZE RAZ?</span></span>`;
            this.sounds.playEffect(this.sounds.lose);
        }
        this.hangMan = new HangMan(this.informAboutDefeat);
        this.selectedPassword = this.password.selectPassword();
        this.validator = new Validator(this.selectedPassword);
        this.keyboard = new Keyboard(this.validator);
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
            this.sounds.playEffect(this.sounds.ok);
        });
        this.validator.subscribe(Action.NOK, () => {
            this.hangMan.drawNextImage();
            this.sounds.playEffect(this.sounds.nok);
        });
    }
}

const game = new Game();
