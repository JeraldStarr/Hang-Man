class HTML {
    constructor() {
        this.alphabetHTML = this.getHTML("#alphabet");
        this.boardHTML = this.getHTML("#board");
        this.hangmanImage = this.getHTML("#szubienica");
    }
    createHTML(html) {
        return document.createElement(html);
    }
    getHTML(html) {
        return document.querySelector(html);
    }
    createKeyHTML(id, index) {
        const divHTML = this.createHTML("div");
        divHTML.classList.add("letter");
        divHTML.id = id;
        divHTML.textContent = keyboard.figures[index];
        return divHTML;
    }
    createCuttingDiv() {
        const divHTML = this.createHTML("div");
        divHTML.setAttribute("style", "clear: both");
        return divHTML;
    }
    addKeysToView(id, index) {
        alphabet.appendChild(this.createKeyHTML(id, index));
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
    buildHTML(i) {
        for (let i = 0; i < keyboard.figures.length; i++) {
            this.arrangeKeys(i, this.setID(i));
        }
    }
}