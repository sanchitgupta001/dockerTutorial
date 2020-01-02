const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi There!');
})

const listener = app.listen(8080);

console.log('listening on port:', listener.address().port)
