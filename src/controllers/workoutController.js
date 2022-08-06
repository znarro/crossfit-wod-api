const workoutService = require('../services/workoutService')

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts()
  res.status(200).send({ status: "OK", data: allWorkouts })
}

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout(req.params.workoutId)
  res.send("Get an existing workout")
}

const createNewWorkout = (req, res) => {
  const { body } = req

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  }

  const createdWorkout = workoutService.createNewWorkout(newWorkout)
  res.status(201).send({ status: "OK", data: createdWorkout })
}

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout(req.params.id, req.body)
  res.send("Update an existing workout")
}

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout(req.params.workoutId)
  res.send("Delete an existing workout")
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}