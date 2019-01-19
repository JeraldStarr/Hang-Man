class Game {
    constructor() {
        this.password = new Password();
        this.validator = new Validator(this.password.selectPassword());
        this.keyboard = new Keyboard(this.validator);
        this.password.drawHiddenPassword();
        this.draw();
    }
    draw() {
        this.keyboard.drawKeys()
        this.validator.boardHTML.textContent =  this.password.hiddenPassword;
    }
}

const game = new Game();
