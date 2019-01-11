class Keyboard {
    constructor() {
        this.figures = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ż", "Ź"];
    }
    drawKeys() {
        const alphabetContainer = document.querySelector('#alphabet');
        const createDivHTML = () => {
            const divHTML = document.createElement("div");
            return divHTML;
        }
        const createKeyHTML = (id, index) => {
            const divHTML = createDivHTML();
            divHTML.classList.add("letter");
            divHTML.id = id;
            divHTML.textContent = this.figures[index];
            return divHTML;
        }
        for (let i = 0; i < this.figures.length; i++) {
            let elementId = "fig" + i;
            const arrangeKeys = index => {
                const figuresInRow = 7;
                const cuttingDiv = (function() {
                    const divHTML = createDivHTML();
                    divHTML.setAttribute("style", "clear: both");
                    return divHTML;
                })();
                alphabetContainer.appendChild(createKeyHTML(elementId, i));
                if ((index + 1) % figuresInRow === 0) alphabetContainer.appendChild(cuttingDiv);
            }
            arrangeKeys(i);
        }
        return alphabetContainer;
    }
    onClick(alphabetContainer) {
        [...alphabetContainer.childNodes].forEach((key) => {
            key.addEventListener("click", () => {
                validator.validatePassword(key.textContent);
            });
        });
    }
}
