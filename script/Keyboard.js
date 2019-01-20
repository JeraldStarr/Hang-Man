class Keyboard {
    constructor() {
        this.key = new Key();
        this.alphabetContainer = document.querySelector('#alphabet');
    }
    getFigures() {
        const figures = ["A", "Ą", "B", "C", "Ć", "D",
                         "E", "Ę", "F", "G", "H", "I",
                         "J", "K", "L", "Ł", "M", "N",
                         "Ń", "O", "Ó", "P", "Q", "R",
                         "S", "Ś", "T", "U", "V", "W",
                         "X", "Y", "Z", "Ż", "Ź"];
        return figures;
    }
    arrangeKeys(index, id) {
        const figuresInRow = 7;
        this.key.addKeysToView(id, index, this.alphabetContainer);
        if ((index + 1) % figuresInRow === 0) 
        this.key.addCuttingDivToView(this.alphabetContainer);
    }
    drawKeys() {
        this.key.buildKeys(this);
    }
    onClick() {
        [...this.alphabetContainer.childNodes].forEach((key) => {
            if (key.id) {
                key.addEventListener("click", () => {
                    // validator.validatePassword(key.textContent);
                });
            }
        });
    }
}

