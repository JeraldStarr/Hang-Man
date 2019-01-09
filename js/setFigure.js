    String.prototype.setFigure = function (place, sign) {
        if (place > this.length - 1) return this.toString();
        else return this.substr(0, place) + sign + this.substr(place + 1);
    }
