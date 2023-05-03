const mongoose = require('mongoose');
const { db_link } = require('../secrets');

mongoose.connect(db_link)
.then(function(db){
    console.log('Guide db connected');
})
.catch(function(err){
    console.log(err);
})

// schema
const guideSchema = mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number
    },
    photo:{
        type:String
    },
    address:{
        type:String
    },
    covid:{
        type:String,
        default:'No'
    },
    Gender: {
        type: String,
        enum: ['male', 'Female', 'transgender'] 
    },
    fee_pday:{
        type:Number
    },
    aadhar:{
        type:Number
    },
    pan:{
        type:String
    },
    dl:{
        type:String
    },
    contact:{
        type:Number
    },
    email:{
        type:String,
        unique:true,
    },
    language:{
        type:String
    }
});

const guideModel = mongoose.model('guideModel', guideSchema);

// (async function createGuide(){
//     let guide = {
//         id : 1,
//         name : 'makshudan',
//         age : 50
//     }
//     let data = await guideModel.create(guide);
//     console.log(data);
// })();

module.exports = guideModel;

