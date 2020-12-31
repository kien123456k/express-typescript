const express = require('express');
const {
  create_student,
  deleteById_student,
  getById_student,
  updateById_student,
} = require('../controllers');
const router = express.Router();

router.post('/', create_student);
router.get('/:student_id', getById_student);
router.put('/:student_id', updateById_student);
router.delete('/:student_id', deleteById_student);

module.exports = router;
