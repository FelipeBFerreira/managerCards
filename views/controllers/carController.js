const car = require('../modal/Car')


module.exports = {
/** Para implementar o conceito MVC  estou solicitando ao model Car atraves do metodo Get os dados */
    async index(req, res) {
         const cars = car.get();
        res.render("pages/index", { registro: cars});
    }

}