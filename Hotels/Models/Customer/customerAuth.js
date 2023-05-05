const mongoose = require('mongoose');
const customerModel = require('./customerModel.js');

//  CRUD OPERATION
// CREATE
module.exports.addCustomer = async function addCustomer(req, res){
    let dataObj = req.body;
    let customer =await customerModel.create(dataObj);
    res.json({
        message : "customer signed up",
        data : customer
    })
}

// READ
module.exports.getCustomer = async function getCustomer(req,res){
    let data = req.body;
    // let n = data.name;
    let customer = await customerModel.findOne({id : data.id});
    res.json({
        message : "customer details",
        data: customer
    });
}

// UPDATE
module.exports.updateCustomer = async function updateCustomer(req,res){
    let dataToBeUpdated = req.body;
    let customer = await customerModel.findOneAndUpdate({id : dataToBeUpdated.id},dataToBeUpdated);
    res.json({
        message : "data updated",
        data : customer
    })
};

// DELETE
module.exports.deleteCustomer = async function deleteCustomer(req,res){
    let dataToBeDeleted = req.body;
    let customer = await customerModel.findOneAndDelete({id : dataToBeDeleted.id});
    res.json({
        message : "customer's data has been deleted",
        data : customer
    })
};