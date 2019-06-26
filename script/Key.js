class ComplexKey {
    constructor(key, shouldAltBePressed) {
        this.key = key;
        this.shouldAltBePressed = shouldAltBePressed;
    }

    static create(polishLetter) {
        const polishLetterToLatin = { "Ą": "a", "Ć": "c", "Ę": "e", "Ł": "l", "Ń": "n",
            "Ó": "r", "Ś": "s", "Ź": "x", "Ż": "z" };
        let shouldAltBePressed = false;
        let letter = polishLetter;
        const latinLetter = polishLetterToLatin[polishLetter]
        if (typeof latinLetter != "undefined") {
            shouldAltBePressed = true;
            letter = latinLetter;
        }

        return new ComplexKey(letter.toLowerCase(), shouldAltBePressed);
    }

    isEqual(event) {
        return event.key == this.key && event.altKey == this.shouldAltBePressed;
    }
}

class Key {
    constructor(parentElement, figure) {
        this.parentElement = parentElement;
        this.figure = figure;
        this.complexKey = ComplexKey.create(figure);
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
        const self = this
        window.addEventListener("keydown", e => {
            if (self.complexKey.isEqual(e))
                self.div.dispatchEvent(new Event("click"));
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
