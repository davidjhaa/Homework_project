const express = require('express');
const {addCustomer, getCustomer, updateCustomer, deleteCustomer} = require('../Models/Customer/customerAuth')
const customerRouter = express.Router();

customerRouter
    .route('/add')
    .post(addCustomer)

customerRouter
    .route('/get')
    .get(getCustomer)

customerRouter
    .route('/update')
    .post(updateCustomer)

customerRouter
    .route('/delete')
    .post(deleteCustomer)


module.exports = customerRouter