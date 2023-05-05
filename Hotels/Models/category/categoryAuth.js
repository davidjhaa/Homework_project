const mongoose = require('mongoose');
const catogaryModel = require('./categoryModel');

//  CRUD OPERATION
// CREATE
module.exports.addCatogary = async function addCatogary(req, res){
    let dataObj = req.body;
    let catogary =await catogaryModel.create(dataObj);
    res.json({
        message : "catogary added",
        data : catogary
    })
}

// READ
module.exports.getCatogary = async function getCatogary(req,res){
    let data = req.body;
    // let n = data.name;
    let catogary = await catogaryModel.findOne({id : data.id});
    res.json({
        message : "catogary details",
        data: catogary
    });
}

// UPDATE
module.exports.updateCatogary = async function updateCatogary(req,res){
    let dataToBeUpdated = req.body;
    let catogary = await catogaryModel.findOneAndUpdate({id : dataToBeUpdated.id},dataToBeUpdated);
    res.json({
        message : "catogary updated",
        data : catogary
    })
};

// DELETE
module.exports.deleteCatogary = async function deleteCatogary(req,res){
    let dataToBeDeleted = req.body;
    let catogary = await catogaryModel.findOneAndDelete({id : dataToBeDeleted.id});
    res.json({
        message : "catogary has been deleted",
        data : catogary
    })
};