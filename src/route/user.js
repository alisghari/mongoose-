const mongoose = require ('mongoose')


const userSchema = new mongoose.Schema({
    name: { type:String, required: true },
    age: String,
    favoriteFood: {type:Array, required: true } ,

});



module.exports = mongoose.model("userSchema", userSchema);