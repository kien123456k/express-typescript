const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.send('Henshin!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Henshin successfully at port ${port}`);
});
