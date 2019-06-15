class Keyboard {
    constructor(validator) {
        this.alphabetContainer = this.createAlphabetContainer();
        this.keys = [];
        this.figures = ["A", "Ą", "B", "C", "Ć", "D",
                        "E", "Ę", "F", "G", "H", "I",
                        "J", "K", "L", "Ł", "M", "N",
                        "Ń", "O", "Ó", "P", "Q", "R",
                        "S", "Ś", "T", "U", "V", "W",
                        "X", "Y", "Z", "Ż", "Ź"];
        this.usedLetters = [];
        this.createKeys();
        this.setOnClickHandler(validator.validateFigure);
        this.setOnKeydownHandler(validator.validateFigure);     
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
    setOnKeydownHandler(handler) {
        window.addEventListener("keydown", e => {
            const letter = e.key.toUpperCase();
            if (this.isUsedAlphabetLetter(e)) {
                if (this.isLetterUsedFirstTime(letter)) {
                    const guessed = handler(letter);
                    this.keys.forEach(item => {
                        item.onKeydownHandler(e.key.toUpperCase(), guessed);
                    })
                }
                this.rememberUsedLetter(letter)
            }
        });
    }
    isLetterUsedFirstTime(letter) {
       return !this.usedLetters.includes(letter)
    }
    rememberUsedLetter(letter) {
        this.usedLetters.push(letter);
    }
    isUsedAlphabetLetter(event) {
        return event.keyCode <= 90 && event.keyCode >= 65 || event.keyCode === 225
    }
}
