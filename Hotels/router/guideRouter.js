const express = require('express');
const {signupGuide, getGuide, updateGuide, deleteGuide} = require('../Models/Guides/guideAuth')
const guideRouter = express.Router();

guideRouter
    .route('/signup')
    .post(signupGuide)

guideRouter
    .route('/get')
    .get(getGuide)

guideRouter
    .route('/update')
    .post(updateGuide)

guideRouter
    .route('/delete')
    .post(deleteGuide)