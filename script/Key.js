class Key {
    constructor(parentElement, figure) {
        this.parentElement = parentElement;
        this.figure = figure;
        this.div = this.createDiv();
        this.addDivToParentElement();
    }

    setOnClickHandler(handler) {
        const markKey = () => {
            this.colourKeys(handler(this.figure));
        }
        this.div.addEventListener("click", markKey, {
            once: true
        });
        this.setOnKeydownHandler();
    }
    setOnKeydownHandler() {
        window.addEventListener("keydown", e => {
            if (e.key.toUpperCase() === this.figure)
                this.div.dispatchEvent(new Event("click"));
        });
    }

    colourKeys(guessed) {
        if (guessed) {
            this.addClass("guessed");
        } else {
            this.addClass("notGuessed");
        }
    }

    addClass(cssClass) {
        this.div.classList.add(cssClass);
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
