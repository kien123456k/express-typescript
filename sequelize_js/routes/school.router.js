const express = require('express');
const {create_school, deleteById_school} = require('../controllers');
const router = express.Router();

router.post('/', create_school);
router.delete('/:school_id', deleteById_school);

module.exports = router;
