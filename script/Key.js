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
            this.colourKeys(handler(this.figure));
        }
        this.div.addEventListener("click", markKey, {once:true});
        this.setOnKeydownHandler();
    }
    setOnKeydownHandler() {
        const self = this
        window.addEventListener("keydown", e => {
            if (self.isUsedAlphabetLetter(e))
            {
                const key = self.translateKeyEventToChar(e);
                if (key == self.figure)
                    self.div.dispatchEvent(new Event("click"));
            }
        });
    }
    translateKeyEventToChar(event) {
        let keyMap = {"A":"Ą", "C":"Ć", "E":"Ę", "L":"Ł", "N":"Ń", "O":"Ó", "S":"Ś", "X":"Ź", "Z":"Ż"}
        let key = event.key.toUpperCase()
        return event.altKey ? keyMap[key] : key;
    }
    isUsedAlphabetLetter(event) {
        return event.keyCode <= 90 && event.keyCode >= 65 || event.keyCode === 225
    }
    colourKeys(guessed) {
        if (guessed) {
            this.addClass("guessed");
        } else {
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
