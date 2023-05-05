const express = require('express');
const {addAddress, getAddress, updateAddress, deleteAddress} = require('../Models/Address/addressAuth')
const addressRouter = express.Router();

addressRouter
    .route('/add')
    .post(addAddress)

addressRouter
    .route('/get')
    .get(getAddress)

addressRouter
    .route('/update')
    .post(updateAddress)

addressRouter
    .route('/delete')
    .post(deleteAddress)


module.exports = addressRouter