class Key {
    constructor(parentElement, figure) {
        this.parentElement = parentElement;
        this.figure = figure;
        this.div = this.createDiv();
        this.addDivToParentElement();
    }
    addClass(cssClass) {
        this.div.classList.add(cssClass);
    }
    setOnClickHandler(handler) {
        const markKey = () => {
            const guessed = handler(this.figure);
            this.colourKeys(guessed, this.figure);
            this.div.removeEventListener("click", markKey);
        }
        this.div.addEventListener("click", markKey);
    }
    onKeydownHandler(letter, guessed) {
        this.colourKeys(guessed, letter);
    }
    colourKeys(guessed, letter) {
        if (guessed && this.figure === letter) {
            this.addClass("guessed"); 
        } else if (!guessed && this.figure === letter) {
            this.addClass("notGuessed");   
        }
    }
    createDiv() {
            const divHTML = document.createElement("div");
            divHTML.classList.add("letter");
            divHTML.id = this.getId()
            divHTML.textContent = this.figure
            return divHTML;
        }
    addDivToParentElement() {
            this.parentElement.appendChild(this.div);
    }
    getId() {
        return 'fig' + this.figure;
    }
}