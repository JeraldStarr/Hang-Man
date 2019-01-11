class HTML {
    constructor() {
        this.createDivHTML = function() {
            const divHTML = document.createElement("div");
            return divHTML;
        }
    }
    createDivHTML() {
        const divHTML = document.createElement("div");
        return divHTML;
    }
    createKeyHTML(id, index) {
        const divHTML = this.createDivHTML();
        divHTML.classList.add("letter");
        divHTML.id = id;
        divHTML.textContent = keyboard.figures[index];
        return divHTML;
    }
    createCuttingDiv() {
        const divHTML = this.createDivHTML();
        divHTML.setAttribute("style", "clear: both");
        return divHTML;
    }
    addKeysToView(id, index) {
        alphabet.appendChild(this.createKeyHTML(id, index));
    }
    addBreakingDivToView() {
        alphabet.appendChild(this.createCuttingDiv());
    }
    arrangeKeys(index, id) {
        const figuresInRow = 7;
        this.addKeysToView(id, index);
        if ((index + 1) % figuresInRow === 0) this.addBreakingDivToView(alphabet);
    }
}