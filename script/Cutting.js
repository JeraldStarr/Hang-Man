class Cutting {
    constructor(parentElement) {
        this.createCuttingDiv = () => {
            const divHTML = document.createElement("div");
            divHTML.setAttribute("style", "clear: both");
            return divHTML;
        };
        this.addCuttingDivToView = () => {
            parentElement.appendChild(this.createCuttingDiv());
        }
    }
}