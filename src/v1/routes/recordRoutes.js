const express = require('express')
const recordController = require('../../controllers/recordController')

const router = express.Router()

router
  .get('/', recordController.getAllRecords)
  .get('/:recordId', recordController.getOneRecord)
  .post('/', recordController.createNewRecord)
  .patch('/:recordId', recordController.updateOneRecord)
  .delete('/:recordId', recordController.deleteOneRecord)

module.exports = router
