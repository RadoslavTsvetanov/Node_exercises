const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name nust be provided'],//will return false promise of not satisfied
        trim:true,
        maxlength:[20,'name cant be more than 20 characters'],
        minlength:[3,'name cant be less than 3 characters'],
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('Task', TaskSchema)