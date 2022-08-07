const DB = require('../database/db.json')
const { saveToDatabase } = require('./utils')

const getAllRecords = () => {
  try {
    return DB.records
  } catch (error) {
    throw { status: 500, message: error }
  }
}

const getOneRecord = (recordId) => {
  try {
    const record = DB.records.find(record => record.id === recordId)
  
    if (!record) {
      throw { status: 400, message: `Can't find record with the id '${recordId}'` }
    }
  
    return record
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.records.filter(record => record.workout === workoutId)

    if (!record) {
      throw { status: 400, message: `Can't find workout with the id '${workoutId}'` }
    }

    return record
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };    
  }
}

const createNewRecord = (newRecord) => {
  try {
    DB.records.push(newRecord)
    saveToDatabase(DB)
    return newRecord
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

const updateOneRecord = (recordId, changes) => {
  const indexForUpdate = DB.records.findIndex(record => record.id === recordId)

  if (indexForUpdate === -1) {
    throw { status: 400, message: `Can't find record with the id '${recordId}'` }
  }

  try {
    const updatedRecord = {
      ...DB.records[indexForUpdate],
      ...changes
    }

    DB.records[indexForUpdate] = updatedRecord
    saveToDatabase(DB)
    return updatedRecord
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

const deleteOneRecord = (recordId) => {
  const indexForDeletion = DB.records.findIndex(record => record.id === recordId)

  if (indexForDeletion === -1) {
    throw { status: 400, message: `Can't find record with the id '${recordId}'` }
  }

  try {
    DB.records.splice(indexForDeletion, 1)
    saveToDatabase(DB)
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

module.exports = {
  getAllRecords,
  getOneRecord,
  getRecordForWorkout,
  createNewRecord,
  updateOneRecord,
  deleteOneRecord
}