const mongoose = require('mongoose');
const { db_link } = require('../../../secrets');

mongoose.connect(db_link)
.then(function(db){
    console.log('address db connected');
    // console.log(db);
})
.catch(function(err){
    console.log(err);
})

// schema
const addressSchema = mongoose.Schema({
    id:{
        type : Number,
        required : true,
        unique:true
    },
    country : String,
    zone:String,
    state : String,
    district : String,
    landmark : String,
    pinCode : String
});

const addressModel = mongoose.model('addressModel', addressSchema);

module.exports = addressModel








// add_id
// add_country
// add_zone
// add_state
// add_district
// add_city
// add_landmark
// add_area_location
// add_area_geo_location
// add_pincode
// cust_id
// guide_id
// pl_id
// hs_id
