const { v4: uuid } = require('uuid')
const Record = require('../database/Record')

const getAllRecords = () => {
  try {
    const allRecords = Record.getAllRecords()
    return allRecords
  } catch (error) {
    throw error
  }
}

const getOneRecord = (recordId) => {
  try {
    const record = Record.getOneRecord(recordId)
    return record
  } catch (error) {
    throw error    
  }
}

const createNewRecord = (newRecord) => {
  const recordToInsert = {
    ...newRecord,
    id: uuid()
  }

  try {
    const createdRecord = Record.createNewRecord(recordToInsert)
    return createdRecord
  } catch (error) {
    throw error
  }
}

const updateOneRecord = (recordId, changes) => {
  try {
    const updatedRecord = Record.updateOneRecord(recordId, changes)
    return updatedRecord
  } catch (error) {
    throw error
  }
}

const deleteOneRecord = (recordId) => {
  try {
    Record.deleteOneRecord(recordId)   
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllRecords,
  getOneRecord,
  createNewRecord,
  updateOneRecord,
  deleteOneRecord
}