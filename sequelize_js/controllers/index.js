module.exports = {
  // school controllers
  create_school: require('./school/create.school'),
  deleteById_school: require('./school/deleteById.school'),
  // student controllers
  create_student: require('./student/create.student'),
  deleteById_student: require('./student/deleteById.student'),
  getById_student: require('./student/getById.student'),
  updateById_student: require('./student/updateById.student'),
};
