
let cars = [
    {
        id : 1,
        descriptionCar : "FIAT ARGO 1.0",
        yearCar :  2021,
        imagesCar : "/images/car.png",
        MileageCar: "00000001",
        NextKmCar: '00001000',
        locationCar : "Localiza",
        ConductorCar : "Aecio"

    },
    {
        id : 2,
        descriptionCar : "FIAT ARGO 2.0",
        yearCar :  2021,
        imagesCar : "/images/car.png",
        MileageCar: 10000000,
        locationCar : "Localiza",
        ConductorCar : "Celso"

    },
    {
        id : 3,
        descriptionCar : "RENAULT 2.0",
        yearCar :  2020,
        imagesCar : "/images/car.png",
        MileageCar: 10000200,
        locationCar : "Unidas",
        ConductorCar : "Vitor"

    },
    {
        id : 4,
        descriptionCar : "RENAULT 2.0",
        yearCar :  2020,
        imagesCar : "/images/car.png",
        MileageCar: 10000200,
        locationCar : "Unidas",
        ConductorCar : "Vitor"

    },
    {
        id : 5,
        descriptionCar : "RENAULT 2.0",
        yearCar :  2020,
        imagesCar : "/images/car.png",
        MileageCar: 10000200,
        locationCar : "Unidas",
        ConductorCar : "Vitor"

    },
    {
        id : 6,
        descriptionCar : "RENAULT 2.0",
        yearCar :  2020,
        imagesCar : "/images/car.png",
        MileageCar: 10000200,
        locationCar : "Unidas",
        ConductorCar : "Vitor"

    }
];

/** Estou implementando o model de abstração de dados do conceito MVC, exportando o metodo Get com a base de dados criado para o loginController */

module.exports = {
     
    get(){
        return cars;
    }

}