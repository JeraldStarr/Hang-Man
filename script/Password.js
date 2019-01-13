class Password {
    constructor() {
        this.statements = [
            "Fortuna kołem się toczy",
            "Bez pracy nie ma kołaczy",
            "Nosił wilk razy kilka ponieśli i wilka",
            "Czego Jaś się nie nauczy tego Jan nie będzie umiał",
            "W marcu jak w garncu",
            "Nie dziel skóry na niedźwiedziu",
            "Jakby kózka nie skakała to by nóżki nie złamała",
            "Jak się ma co się lubi to się kradnie co popadnie",
            "Nie ma dymu bez ognia",
            "Nie taki diabeł straszny jak go malują",
            "Uderz w stół a nożyce się odezwą",
            "Nie ma róży bez kolców",
            "Gdy w grudniu śnieg pada drugi taki sam rok zapowiada",
            "Gdy w styczniu deszcz leje złe robi nadzieje",
            "Daj kurze grzędę a wyżej jeszcze siędę",
            "Kto rano wstaje temu Pan Bóg daje",
            "A co po czyjej wielkości jak nie ma w głowie mądrości",
            "Będą takie mrozy że przymarznie cap do kozy",
            "W maju jak w gaju",
            "Kto pod kim dołki kopie ten sam w nie wpada",
            "Jeśli wpadniesz między wrony musisz krakać tak jak one",
            "Każdy kij ma dwa końce",
            "Do trzech razy sztuka",
            "A kto z nami nie wypije – tego we dwa kije",
            "Biedny kupuje jedną kapotę, ale na całe życie",
            "Bogatemu to i byk się ocieli",
            "Chcesz się dowiedzieć prawdy o sobie pokłóć się z przyjacielem",
            "Chrzest polewaj wodą wesele wódką a pogrzeb płakaniem",
            "Co się źle zaczyna to się dobrze kończy",
            "Dla chcącego nic trudnego",
            "Dobry zwyczaj nie pożyczaj jeszcze lepszy nie oddawaj",
            "Dzieci i ryby głosu nie mają",
            "Gdyby babcia miała wąsy to by była dziadkiem",
            "Gdzie głowa rządzi tam człowiek nie błądzi",
            "Głupiec głupca a diabeł diabła chwali",
            "Hulaj dusza piekła nie ma",
            "I ja waść i ty waść a kto będzie świnie paść",
            "Idzie luty podkuj buty"
        ],
        this.selectedPassword;
        this.hiddenPassword = "";
    }
    selectPassword() {
       this.selectedPassword = this.statements[Math.floor(Math.random() * this.statements.length)];
       if (this.selectedPassword > this.statements.length - 1) this.selectedPassword = 1;
    }
    drawHiddenPassword() {
        for (let i = 0; i < this.selectedPassword.length; i++) {
            this.hiddenPassword = this.selectedPassword.charAt(i) === " " ? this.hiddenPassword += " " : this.hiddenPassword += "-";
        }
    }
    setFigure(place, sign, hiddenPassword) {
            if (place > hiddenPassword.length - 1) return hiddenPassword.toString();
            else return `${hiddenPassword.substr(0, place)}${sign}${hiddenPassword.substr(place + 1)}`;
    }
    showFigure(figure) {
        for (let i = 0; i < this.selectedPassword.length; i++) {
            let hiddenPassword = this.hiddenPassword;
            if (this.selectedPassword.charAt(i) === figure) {
               this.hiddenPassword = this.setFigure(i, figure, hiddenPassword);
            }
        }
    }
}

