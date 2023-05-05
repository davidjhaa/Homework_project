const mongoose = require('mongoose');
const homeStaysModel = require('./homeStayModel');

// create
module.exports.addHomeStay = async function addHomeStay(req, res){
    let dataObj = req.body;
    let homeStay =await guideModel.create(dataObj);
    res.json({
        message : "HomeStay Added",
        data : homeStay
    })
}

// READ
module.exports.getHomeStay = async function getHomeStay(req,res){
    let data = req.body;
    let homeStay = await guideModel.findOne({id : data.id})
    res.json({
        message : "Home Stay details",
        data: homeStay
    });
}

// UPDATE
module.exports.updateHomeStay = async function updateHomeStay(req,res){
    let dataToBeUpdated = req.body;
    let homeStay = await guideModel.findOneAndUpdate({id : dataToBeUpdated.id},dataToBeUpdated);
    res.json({
        message : "data updated",
        data : homeStay
    })
};

// DELETE
module.exports.deleteHomeStay = async function deleteHomeStay(req,res){
    let dataToBeDeleted = req.body;
    let homeStay = await guideModel.findOneAndDelete({id : dataToBeDeleted.id});
    res.json({
        message : "data has been deleted",
        data : homeStay
    })
};