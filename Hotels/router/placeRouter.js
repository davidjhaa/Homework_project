const express = require('express')
const {getPlace, addPlace, updatePlace, deletePlace} = require('../Models/Place/placeAuth')
const homeStayRouter = express.Router();

homeStayRouter
    .route('/getPlace')
    .get(getPlace)

homeStayRouter
    .route('/addPlace')
    .post(addPlace)

homeStayRouter
    .route('/updatePlace')
    .post(updatePlace)

homeStayRouter
    .route('/deletePlace')
    .post(deletePlace)


module.exports = homeStayRouter;