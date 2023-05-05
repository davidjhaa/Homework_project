const mongoose = require('mongoose');
const { db_link } = require('../../../secrets');

mongoose.connect(db_link)
.then(function(db){
    console.log('customer db connected');
    // console.log(db);
})
.catch(function(err){
    console.log(err);
})

// schema
const customerSchema = mongoose.Schema({
    id:{
        type : Number,
        required : true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    location:{
        type:String
    },
    address:{
        type:String,
    },
    contact:{
        type:String
    },
    gender:{
        type:String
    },
    secret_key:{
        type : String,
    }
});

const customerModel = mongoose.model('customerModel', customerSchema);

module.exports = customerModel















// cust_id
// cust_name
// cust_email
// cust_location
// cust_address
// cust_contact
// cust_interests
// cust_id_proof_no
// cust_id_proof_image
// cust_gender
// cust_sec_key
