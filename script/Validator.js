class Validator {
    constructor (pass) {
        this.okSubscriptions = [];
        this.nokSubscriptions = [];
        this.pass = pass;
        this.validateFigure = figure => {
            if (this.pass.includes(figure)) {
                this.notifyOkSubscribers(figure);
                return true;
            } else {
                this.notifyNokSubscribers();
                return false;
            }
        }
    }
    subscribe(action, handler) {
        if (action === Action.OK) {
            this.okSubscriptions.push(handler);
        } else if (action === Action.NOK) {
            this.nokSubscriptions.push(handler);
        }
    }
    notifyOkSubscribers(figure) {
        for (let i = 0; i < this.okSubscriptions.length; i++) {
            this.okSubscriptions[i](figure);
        }
    }
    notifyNokSubscribers() {
        for (let i = 0; i < this.nokSubscriptions.length; i++) {
            this.nokSubscriptions[i]();
        }
    }
}
