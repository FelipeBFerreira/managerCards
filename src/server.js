const express = require("express");
const server = express();

const Cars = [
    {
        id : 1,
        descriptionCar : "FIAT ARGO 1.0",
        yearCar :  2021,
        imagesCar : "/images/cars.png",
        MileageCar: 00000001,
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
        imagesCar : "/images/cars.png",
        MileageCar: 10000200,
        locationCar : "Unidas",
        ConductorCar : "Vitor"

    }
];

server.set("view engine", "ejs")
server.use(express.static("public"));

server.get("/" , function (req, res){ 
    


   
    
    res.render("pages/index", { registro: Cars}); })

server.get("/signup" , function (req, res){ res.render("pages/signup"); })

server.listen(3000, () => console.log('RODANDO'));