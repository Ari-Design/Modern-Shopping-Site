const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const axios = require('axios');

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`Example app listening at port: ${port}`)
});

// app.get('/:product_id', (req, res) => {
//   req.params.id
// });