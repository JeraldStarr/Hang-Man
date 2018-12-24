const audio = (() => {
    const yes = new Audio("yes.wav");
    const no = new Audio("no.wav");
    return {
        yes: yes,
        no: no
    }
})();