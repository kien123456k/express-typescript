const Student = require('../../models').Student;
const School = require('../../models').School;

module.exports = (req, res, next) => {
  Student.findAll({where: {name: req.body.name}})
    .then((students) => {
      if (students.length)
        return res.status(400).json({
          status: 'fail',
          message: 'Student is already exist',
        });

      School.findAll({where: {name: req.body.school}}).then((schools) => {
        if (!schools.length)
          return res.status(400).json({
            status: 'fail',
            message: 'School is not exist',
          });

        Student.create({name: req.body.name, school_id: schools[0].id})
          .then(() => {
            return res.status(201).json({
              status: 'success',
              message: 'Student created successfully',
            });
          })
          .catch((err) => next(err));
      });
    })
    .catch((err) => next(err));
};
