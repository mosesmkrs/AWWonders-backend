const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model('workout',workoutSchema)

