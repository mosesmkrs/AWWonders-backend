const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


//get all workouts
const getAllWorkouts = async(req,res) => {
    const workout = await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workout)
}


//get a single workout
const getWorkout = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({error:'No such workout'})
    }

    res.status(200).json(workout)
}


//create new workout
const createWorkout = async(req,res)=> {
    const{username,description,url,caption}=req.body

    //add doc to db

    try{
        const workout =await Workout.create({username,description,url,caption})
        res.status(200).json(workout)
    }catch(error) {
      res.status(400).json({error:error.message})
    }
    
}


//delete a workout
const deleteWorkout = async(req,res) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout) {
        return res.status(404).json({error:'No such workout'})
}
res.status(404).json(workout)
}



//update a workout
const updateWorkout = async(req,res) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    const workout = await Workout.findOneAndUpdate({_id: id},{...req.body})
    if(!workout) {
        return res.status(404).json({error:'No such workout'})
}
res.status(404).json(workout)


}



module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}