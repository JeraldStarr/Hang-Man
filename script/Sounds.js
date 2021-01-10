class Sounds {
    constructor() {
        this.ok = new Audio("audio/ok.wav");
        this.nok = new Audio("audio/nok.wav");
        this.lose = new Audio("audio/lose.wav");
        this.win = new Audio("audio/win.wav");
    }
    playEffect(sound) {
        sound.play();
    }
}