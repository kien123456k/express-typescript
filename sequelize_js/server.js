const express = require('express');
const app = express();
const logger = require('morgan');
const api = require('./routes');

app.use(logger('dev'));
app.use(express.json());
app.use('/api', api);

const port = process.env.PORT || 5000;

app.use((err, req, res, next) => {
  if (err.status) {
    return res.status(400).json(err);
  }

  return res.status(500).json({
    status: 'error',
    message: 'something went wrong',
  });
});

app.listen(port, () => {
  console.log(`Henshin successfully at http://localhost:${port}`);
});
