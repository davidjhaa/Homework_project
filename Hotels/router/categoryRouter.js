const express = require('express');
const {addCatogary, getCatogary, updateCatogary, deleteCatogary} = require('../Models/category/categoryAuth')
const categoryRouter = express.Router();

categoryRouter
    .route('/add')
    .post(addCatogary)

categoryRouter
    .route('/get')
    .get(getCatogary)

categoryRouter
    .route('/update')
    .post(updateCatogary)

categoryRouter
    .route('/delete')
    .post(deleteCatogary)


module.exports = categoryRouter