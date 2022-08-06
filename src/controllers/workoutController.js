const workoutService = require('../services/workoutService')

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts()
  res.send({ status: "OK", data: allWorkouts })
}

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout(req.params.workoutId);
  res.send("Get an existing workout")
}

const createNewWorkout = (req, res) => {
  const createdWorkout = workoutService.createNewWorkout(req.body);
  res.send("Create a new workout")
}

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout(req.params.id, req.body);
  res.send("Update an existing workout")
}

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout(req.params.workoutId);
  res.send("Delete an existing workout")
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}