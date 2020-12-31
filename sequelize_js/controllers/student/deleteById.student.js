const Student = require('../../models').Student;

module.exports = (req, res, next) => {
  Student.destroy({where: {id: req.params.student_id}})
    .then((success) => {
      if (success)
        return res.status(200).json({
          status: 'success',
          message: 'Student deleted successfully',
        });

      return Promise.reject({
        status: 'fail',
        message: 'Student is not exist',
      });
    })
    .catch((err) => next(err));
};
