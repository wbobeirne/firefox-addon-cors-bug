const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.send('It works!');
});

app.listen(6021, () => {
  console.log('Server has started at http://localhost:6021/');
  console.log('Open the extension to test out the CORS bug');
});