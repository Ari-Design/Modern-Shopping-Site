const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/products/:product_id', (req, res) => {

});