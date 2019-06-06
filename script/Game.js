class Game {
    constructor() {
        this.password = new Password();
        this.showFailedMessage = () => {
            const alphabetContainer = document.querySelector("#alphabet");
            alphabetContainer.innerHTML = `Przegrana! Prawidłowe hasło: 
            ${this.selectedPassword} <br/><br/><span class="reset" 
            onclick="location.reload()">JESZCZE RAZ?</span>`;
        }
        this.hangMan = new HangMan(this.showFailedMessage);
        this.selectedPassword = this.password.selectPassword();
        this.validator = new Validator(this.selectedPassword);
        this.keyboard = new Keyboard(this.validator);
        this.ok = new Audio("audio/ok.wav");
        this.nok = new Audio("audio/nok.wav");
        this.subscribe();
        this.draw();
    }
    draw() {
        this.password.drawHiddenPassword();
        this.keyboard.drawKeys()
        this.hangMan.drawNextImage();
    }
    subscribe() {
        const self = this;
        this.validator.subscribe(Action.OK, figure => {
            self.password.showFigure(figure);             
        });
        this.validator.subscribe(Action.OK, () => {          
            self.ok.play();
        });
        this.validator.subscribe(Action.NOK, () => {
            self.hangMan.drawNextImage();
            self.nok.play();
        });
    }
}

const game = new Game();
