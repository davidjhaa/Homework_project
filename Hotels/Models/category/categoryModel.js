const mongoose = require('mongoose');
const { db_link } = require('../../../secrets');

mongoose.connect(db_link)
.then(function(db){
    console.log('category db connected');
    // console.log(db);
})
.catch(function(err){
    console.log(err);
})

// schema
const categorySchema = mongoose.Schema({
    id:{
        type : Number,
        required : true,
        unique:true
    },
    name : String,
    type:String,
    wellknown_places : String,
    main_activities : String,
    image : String,
});

const categoryModel = mongoose.model('categoryModel', categorySchema);

module.exports = categoryModel















// Category
// ------------------
// cat_id
// cat_name
// cat_state
// cat_type
// cat_wellknown_places
// cat_main_activities
// cat_image
