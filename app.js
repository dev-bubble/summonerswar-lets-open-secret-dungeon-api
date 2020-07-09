const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('Hello Kasi!');
});
app.use(function(req, res, next) {
  res.send('No other pages!');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));