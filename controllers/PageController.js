const vistaPrincipal = (req, res) => {
    res.render('home');
}

const vistaPanel2 = (req, res) => {
    res.render('panel2');
}
const vistaPanel3 = (req, res) => {
    res.render('panel3');
}
const vistaPanel4 = (req, res) => {
    res.render('panel4');
}

module.exports = {
    vistaPrincipal,
    vistaPanel2,
    vistaPanel3,
    vistaPanel4
}