const express = require('express')
const {getHomeStay, addHomeStay, updateHomeStay, deleteHomeStay} = require('../Models/HomeStays/homeStaysAuth')
const homeStayRouter = express.Router();

homeStayRouter
    .route('/getHome')
    .get(getHomeStay)

homeStayRouter
    .route('/addHome')
    .post(addHomeStay)

homeStayRouter
    .route('/updateHome')
    .post(updateHomeStay)

homeStayRouter
    .route('/deleteHome')
    .post(deleteHomeStay)


module.exports = homeStayRouter;
