const School = require('../../models').School;

module.exports = (req, res, next) => {
  School.destroy({where: {id: req.params.school_id}})
    .then((success) => {
      if (success)
        return res.status(200).json({
          status: 'success',
          message: 'School deleted successfully',
        });

      return Promise.reject({
        status: 'fail',
        message: 'School is not exist',
      });
    })
    .catch((err) => next(err));
};
