const School = require('../../models').School;

module.exports = (req, res, next) => {
  School.findAll({where: {name: req.body.name}})
    .then((schools) => {
      if (schools.length)
        return res.status(400).json({
          status: 'fail',
          message: 'School is already exist',
        });

      School.create({name: req.body.name})
        .then(() => {
          return res.status(201).json({
            status: 'success',
            message: 'School created successfully',
          });
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};
