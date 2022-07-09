
const indexController = {
    index: (req, res) => {
        res.render('index', { title: 'Expressssss' }); //no entiendo que pasa el title
    }  
}

module.exports = indexController;