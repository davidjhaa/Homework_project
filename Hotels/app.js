const mongoose = require('mongoose');
const express = require('express');
const app = express();


app.use(express.json());
app.listen(3000);

const guideRouter = require('./router/guideRouter')
const homeStayRouter = require('./router/homeStayRouter')

app.use('/guide', guideRouter);
app.use('/homeStays', homeStayRouter);