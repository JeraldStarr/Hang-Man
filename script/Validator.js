class Validator {
    constructor (pass) {
        this.pass = pass;
        this.boardHTML = document.querySelector("#board");
        this.hangMan = new HangMan();
        this.validateFigure = figure => {
            const password = new Password();
            this.figure = figure;
            if (this.pass.includes(figure)) {
                game.password.showFigure(this.figure);
                this.boardHTML.textContent = game.password.hiddenPassword;
                if (this.pass === game.password.hiddenPassword) {
                    password.displayVictoryMessage();
                }
                return true;
            } else {
                this.hangMan.failed();
                this.boardHTML.textContent = game.password.hiddenPassword;
                return false;
            }
        }
    }
    subscribe(Action) {
    }
}
