const mongoose = require('mongoose');
const placeModel = require('./placeModel');

//  CRUD OPERATION
// CREATE
module.exports.addPlace = async function addPlace(req, res){
    let dataObj = req.body;
    let place =await placeModel.create(dataObj);
    res.json({
        message : "Place added",
        data : place
    })
}

// READ
module.exports.getPlace = async function getPlace(req,res){
    let data = req.body;
    // let n = data.name;
    let place = await placeModel.findOne({id : data.id});
    res.json({
        message : "Place details",
        data: place
    });
}

// UPDATE
module.exports.updatePlace = async function updatePlace(req,res){
    let dataToBeUpdated = req.body;
    let place = await placeModel.findOneAndUpdate({id : dataToBeUpdated.id},dataToBeUpdated);
    res.json({
        message : "Place updated",
        data : place
    })
};

// DELETE
module.exports.deletePlace = async function deletePlace(req,res){
    let dataToBeDeleted = req.body;
    let place = await placeModel.findOneAndDelete({id : dataToBeDeleted.id});
    res.json({
        message : "Place has been deleted",
        data : place
    })
};