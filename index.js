const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

app.get('/new', (req, res) => {
  res.send({new: 'new'});
});

const PORT = process.env.PORT ||5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));