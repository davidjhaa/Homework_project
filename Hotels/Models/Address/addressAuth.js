const mongoose = require('mongoose');
const addressModel = require('./addressModel');

//  CRUD OPERATION
// CREATE
module.exports.addAddress = async function addAddress(req, res){
    let dataObj = req.body;
    let Address =await addressModel.create(dataObj);
    res.json({
        message : "customer signed up",
        data : Address
    })
}

// READ
module.exports.getAddress = async function getAddress(req,res){
    let data = req.body;
    // let n = data.name;
    let Address = await addressModel.findOne({id : data.id});
    res.json({
        message : "Address details",
        data: Address
    });
}

// UPDATE
module.exports.updateAddress = async function updateAddress(req,res){
    let dataToBeUpdated = req.body;
    let Address = await addressModel.findOneAndUpdate({id : dataToBeUpdated.id},dataToBeUpdated);
    res.json({
        message : "data updated",
        data : Address
    })
};

// DELETE
module.exports.deleteAddress = async function deleteAddress(req,res){
    let dataToBeDeleted = req.body;
    let Address = await addressModel.findOneAndDelete({id : dataToBeDeleted.id});
    res.json({
        message : "Address has been deleted",
        data : Address
    })
};