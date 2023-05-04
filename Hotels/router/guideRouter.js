const express = require('express');
const {addGuide, getGuide, updateGuide, deleteGuide} = require('../Models/Guides/guideAuth')
const guideRouter = express.Router();

guideRouter
    .route('/add')
    .post(addGuide)

guideRouter
    .route('/get')
    .get(getGuide)

guideRouter
    .route('/update')
    .post(updateGuide)

guideRouter
    .route('/delete')
    .post(deleteGuide)


module.exports = guideRouter