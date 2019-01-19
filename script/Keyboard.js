class Keyboard {
    constructor() {
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
    drawKeys() {
        const html = new HTML();
        const alphabetContainer = html.get('#alphabet');
        html.buildKeys();
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
