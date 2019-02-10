class Key {
    constructor(parentElement, figure) {
        this.parentElement = parentElement;
        this.figure = figure;
        this.div = this.createDiv();
        this.addDivToParentElement();
<<<<<<< HEAD

=======
>>>>>>> key_feature
    }
    addClass(cssClass) {
        this.div.classList.add(cssClass);
    }
    setOnClickHandler(handler) {
        const self = this;
        const markKey = () => {
            if (handler(self.figure)) {
                this.addClass("guessed");
            } else {
                this.addClass("notGuessed");
            }
            self.div.removeEventListener("click", markKey);
        }
        this.div.addEventListener("click", markKey);
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
<<<<<<< HEAD
        }
    
=======
>>>>>>> key_feature
    }
    getId() {
        return 'fig' + this.figure;
    }
}
