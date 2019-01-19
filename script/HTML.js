class HTML {
    constructor() {
        this.alphabetHTML = this.get("#alphabet");
        this.boardHTML = this.get("#board");
        this.hangmanImage = this.get("#szubienica");
        this.keyboard;
    }
    get(element) {
        return document.querySelector(element);
    }
    createKey(id, index) {
        const divHTML = document.createElement("div");
        let figures = null;
        divHTML.classList.add("letter");
        divHTML.id = id;
        figures = game.keyboard.getFigures();
        divHTML.textContent = figures[index];
        return divHTML;
    }
    createCuttingDiv() {
        const divHTML = document.createElement("div");
        divHTML.setAttribute("style", "clear: both");
        return divHTML;
    }
    addKeysToView(id, index) {
        alphabet.appendChild(this.createKey(id, index));
    }
    addCuttingDivToView() {
        alphabet.appendChild(this.createCuttingDiv());
    }
    arrangeKeys(index, id) {
        const figuresInRow = 7;
        this.addKeysToView(id, index);
        if ((index + 1) % figuresInRow === 0) this.addCuttingDivToView(alphabet);
    }
    setID(i) {
        return "fig" + i;   
    }
    buildKeys() {
        const alphabetLenght = game.keyboard.getFigures().length;
        for (let i = 0; i < alphabetLenght; i++) {
            this.arrangeKeys(i, this.setID(i));
        }
    }
}