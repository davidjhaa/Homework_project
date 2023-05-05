const mongoose = require('mongoose');
const { db_link } = require('../../../secrets');

mongoose.connect(db_link)
.then(function(db){
    console.log('place db connected');
    // console.log(db);
})
.catch(function(err){
    console.log(err);
})

// schema
const placeSchema = mongoose.Schema({
    id:{
        type : Number,
        required : true,
        unique:true
    },
    name : String,
    address : String,
    famous_for : String,
    activities : String,
    season : String,
    image : String
});

const placeModel = mongoose.model('placeModel', placeSchema);

module.exports = placeModel



// pl_id
// pl_name
// pl_address
// pl_famous_for
// pl_activities
// pl_season
// pl_image
