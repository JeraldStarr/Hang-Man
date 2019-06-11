class Keyboard {
    constructor(validator) {
        this.validator = validator;
        this.alphabetContainer = this.createAlphabetContainer();
        this.keys = [];
        this.figures = ["A", "Ą", "B", "C", "Ć", "D",
                        "E", "Ę", "F", "G", "H", "I",
                        "J", "K", "L", "Ł", "M", "N",
                        "Ń", "O", "Ó", "P", "Q", "R",
                        "S", "Ś", "T", "U", "V", "W",
                        "X", "Y", "Z", "Ż", "Ź"];
        this.createKeys();
        this.setOnClickHandler(validator.validateFigure);
        this.onKeydownHandler(validator.validateFigure);     
    }
    drawKeys() {
        let htmlAlphabet = document.querySelector('#alphabet');
        htmlAlphabet.parentNode.replaceChild(this.alphabetContainer, htmlAlphabet)
    }
    createAlphabetContainer() {
        let alphabetContainer = document.createElement("div");
        alphabetContainer.id = "alphabet";
        return alphabetContainer;
    }
    createKeys() {
        for (let i = 0; i < this.figures.length; i++) {
            const FIGURES_IN_ROW = 7;
            this.keys.push(new Key(this.alphabetContainer, this.figures[i]));
            if ((i + 1) % FIGURES_IN_ROW === 0) new Cutting(this.alphabetContainer);
        }
    }
    setOnClickHandler(handler) {
        this.keys.forEach(key => {
            key.setOnClickHandler(handler)
        });
    }
    onKeydownHandler(handler) {
        const markKey = e => {
            const letter = e.key.toUpperCase();
            const guessed = handler(letter);
            if (e.keyCode <= 90 && e.keyCode >= 65 || e.keyCode === 225) {
                this.keys.forEach(item => {
                    item.onKeydownHandler(e.key.toUpperCase(), guessed);
                })
            }
        }
        window.addEventListener("keydown", e => {
            markKey(e);
        });
        

    }
}
