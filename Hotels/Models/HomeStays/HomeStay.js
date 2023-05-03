const mongoose = require('mongoose');
const { db_link } = require('../secrets');

mongoose.connect(db_link)
.then(function(db){
    console.log('Home Stay db connected');
})
.catch(function(err){
    console.log(err);
})

const HomeStaySchema = mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:String,
    },
    charge_pday:{
        type:Number,
        required:true
    }
})

const homeStaysModel = mongoose.model('homeStaysModel', HomeStaySchema)

module.exports = homeStaysModel;

















hs_id
hs_name
hs_location
hs_address
hs_contact
hs_speciality
hs_facilities
hs_charge_pday
hs_rooms
hs_baths
hs_spool
hs_kitchen
hs_dist_airport
hs_dist_railway