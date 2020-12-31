const Student = require('../../models').Student;

module.exports = (req, res, next) => {
  Student.findAll({where: {id: req.params.student_id}})
    .then((students) => {
      if (!students.length)
        return res.status(400).json({
          status: 'fail',
          message: 'Student is not exist',
        });

      Student.update(
        {email: req.body.email, phone: req.body.phone},
        {where: {id: req.params.student_id}}
      ).then(() => {
        return res.status(200).json({
          status: 'success',
          message: 'Student updated successfully',
        });
      });
    })
    .catch((err) => next(err));
};
