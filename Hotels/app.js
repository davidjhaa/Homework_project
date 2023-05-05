const mongoose = require('mongoose');
const express = require('express');
const app = express();


app.use(express.json());
app.listen(3000);

const guideRouter = require('./router/guideRouter')
const homeStayRouter = require('./router/homeStayRouter')
const customerRouter = require('./router/customerRouter')
const addressRouter = require('./router/addressRouter')
const categoryRouter = require('./router/categoryRouter')

app.use('/guide', guideRouter);
app.use('/homeStays', homeStayRouter);
app.use('/customer', customerRouter);
app.use('/address', addressRouter);
app.use('/catogary', categoryRouter);