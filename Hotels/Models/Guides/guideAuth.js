const mongoose = require('mongoose');
const {guideModel} = require('./guide');

//  CRUD OPERATION
// CREATE
module.exports.signupGuide = async function signupGuide(req, res){
    let dataObj = req.body;
    let guide =await guideModel.create(dataObj);
    res.json({
        message : "user signed up",
        data : guide
    })
}

// READ
module.exports.getGuide = async function getGuide(req,res){
    let id = req.body.id;
    let guide = await guideModel.findOne({id : id})
    res.json({
        message : "Guide details",
        data:guide
    });
}

// UPDATE
module.exports.updateGuide = async function updateGuide(req,res){
    let dataToBeUpdated = req.body;
    let guide = await guideModel.findOneAndUpdate({id : dataToBeUpdated.id},dataToBeUpdated);
    res.json({
        message : "data updated",
        data : guide
    })
};

// DELETE
module.exports.deleteGuide = async function deleteGuide(req,res){
    let dataToBeDeleted = req.body;
    let guide = await guideModel.findOneAndDelete({id : dataToBeDeleted.id});
    res.json({
        message : "data has been deleted",
        data : guide
    })
};