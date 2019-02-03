class Cutting {
    constructor(parentElement) {
        this.createCuttingDiv = () => {
            const divHTML = document.createElement("div");
            divHTML.setAttribute("style", "clear: both");
            return divHTML;
        };
<<<<<<< HEAD
        this.addCuttingDivToParentElement = () => {
            parentElement.appendChild(this.createCuttingDiv());
        }
        this.addCuttingDivToParentElement();
=======
        this.addCuttingDivToView = () => {
            parentElement.appendChild(this.createCuttingDiv());
        }
>>>>>>> key_feature
    }
}