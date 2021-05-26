
let cars = [
    {
        id : 1,
        descriptionCar : "FIAT ARGO 1.0",
        yearCar :  2021,
        imagesCar : "/images/car.png",
        mileageCar: 10,
        nextKmCar: 1000,
        locationCar : "Localiza",
        conductorCar : "Aecio"

    },
    {
        id : 2,
        descriptionCar : "FIAT ARGO 2.0",
        yearCar :  2021,
        imagesCar : "/images/car.png",
        mileageCar: 10000000,
        locationCar : "Localiza",
        conductorCar : "Celso"

    },
    {
        id : 3,
        descriptionCar : "RENAULT 2.0",
        yearCar :  2020,
        imagesCar : "/images/car.png",
        mileageCar: 10000200,
        locationCar : "Unidas",
        conductorCar : "Vitor"

    },
    {
        id : 4,
        descriptionCar : "RENAULT 2.0",
        yearCar :  2020,
        imagesCar : "/images/car.png",
        mileageCar: 10000200,
        locationCar : "Unidas",
        conductorCar : "Vitor"

    },
    {
        id : 5,
        descriptionCar : "RENAULT 2.0",
        yearCar :  2020,
        imagesCar : "/images/car.png",
        mileageCar: 10000200,
        locationCar : "Unidas",
        conductorCar : "Vitor"

    },
    {
        id : 6,
        descriptionCar : "RENAULT 2.0",
        yearCar :  2020,
        imagesCar : "/images/car.png",
        mileageCar: 10000200,
        locationCar : "Unidas",
        conductorCar : "Vitor"

    }
];


historyCar=
[
    {   
        id: 1,
        idCar: 1,
        descriptionProblem: 'Troca de Oleo e Reparo',
        Data:'21-02-2021',
        url:'',
    },
    {   
        id: 2,
        idCar: 1,
        descriptionProblem: 'Vistoria de 20mil KM',
        Data:'24-04-2021',
        url:'https://avatars.githubusercontent.com/u/18500174?v=4',
    },
    {   
        id: 3,
        idCar: 1,
        descriptionProblem: 'Avaria do Veiculo',
        Data:'01-05-2021',
        url:'https://avatars.githubusercontent.com/u/18500174?v=4',
    },
    {   
        id: 4,
        idCar: 1,
        descriptionProblem: 'Troca de Oleo e Reparo',
        Data:'21-02-2021',
        url:'',
    },
    {   
        id: 5,
        idCar: 1,
        descriptionProblem: 'Vistoria de 20mil KM',
        Data:'24-04-2021',
        url:'https://avatars.githubusercontent.com/u/18500174?v=4',
    },
    {   
        id: 6,
        idCar: 1,
        descriptionProblem: 'Avaria do Veiculo',
        Data:'01-05-2021',
        url:'https://avatars.githubusercontent.com/u/18500174?v=4',
    },
    
    
];

/** Estou implementando o model de abstração de dados do conceito MVC, exportando o metodo Get com a base de dados criado para o loginController */

module.exports = {
     
    getCar(){
        return cars;
    },
    getHistoryCar(){
        return historyCar;
    }

}