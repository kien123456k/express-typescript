const express = require('express');
const router = express.Router();
const schoolRouter = require('./school.router');
const studentRouter = require('./student.router');

router.use('/schools', schoolRouter);
router.use('/students', studentRouter);

module.exports = router;
