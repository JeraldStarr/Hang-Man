class Cutting {
    constructor(parentElement) {
        this.createCuttingDiv = () => {
            const divHTML = document.createElement("div");
            divHTML.setAttribute("style", "clear: both");
            return divHTML;
        };
        this.addCuttingDivToParentElement = () => {
            parentElement.appendChild(this.createCuttingDiv());
        }
        this.addCuttingDivToParentElement();
    }
}