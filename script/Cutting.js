class Cutting {
    constructor() {
    }
    createCuttingDiv() {
        const divHTML = document.createElement("div");
        divHTML.setAttribute("style", "clear: both");
        return divHTML;
    }
        addCuttingDivToView(alphabetContainer) {
        alphabetContainer.appendChild(this.createCuttingDiv());
    }
}