class Keyboard {
    constructor() {
        this.figures = ["A", "Ą", "B", "C", "Ć", "D",
                        "E", "Ę", "F", "G", "H", "I",
                        "J", "K", "L", "Ł", "M", "N",
                        "Ń", "O", "Ó", "P", "Q", "R",
                        "S", "Ś", "T", "U", "V", "W",
                        "X", "Y", "Z", "Ż", "Ź"];
    }
    drawKeys() {
        const html = new HTML();
        const alphabetContainer = html.getHTML('#alphabet');
        html.buildKeys(this);
        return alphabetContainer;
    }
    onClick(alphabetContainer) {
        [...alphabetContainer.childNodes].forEach((key) => {
            if (key.id) {
                key.addEventListener("click", () => {
                    // validator.validatePassword(key.textContent);
                });
            }
        });
    }
}

const keyboard = new Keyboard();
// keyboard.onClick(keyboard.drawKeys());