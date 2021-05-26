const car = require('../modal/Car');

module.exports = {
    /** Para implementar o conceito MVC  estou solicitando ao model Car atraves do metodo Get os dados */
    async index(req, res) {

        res.render("pages/index", { registro: car.getCar() });
    },

    async show(req, res) {

        const { id } = req.params;
        const datas = await car.getCar();
        const CarHistory = await car.getHistoryCar();
        let nextKilometragem;
           

        /*Sempre ao realizar o find com id precisa realizar a conversão para Number no Javascript*/
        const cars = datas.find(cars => Number(cars.id) === Number(id))
        nextKilometragem =  Number(cars.nextKmCar) + Number(cars.mileageCar);
        res.render("pages/cars", { registro: cars, historyCar: CarHistory, nextKilometragem: nextKilometragem });

    }

    

}
