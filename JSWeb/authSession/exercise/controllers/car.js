const Car = require('../models/Car');

module.exports = {
    addGet: (req, res) => {
        res.render('car/add');
    },
    addPost: (req, res) => {
        const carBody = req.body;
        carBody.pricePerDay= +carBody.pricePerDay
        Car.create(carBody)
        .then(()=>{
            res.redirect('/')
        }).catch(console.error)
    },
    allCars: (req, res) => {
        Car.find()
        .then((cars)=>{
            res.render('car/all',{cars});  
        }).catch(console.error);
    },
    rent: (req, res) => {

    },
    editGet: (req, res) => {
        res.render('car/edit')
    },
    editPost: (req, res) => {

    }
}