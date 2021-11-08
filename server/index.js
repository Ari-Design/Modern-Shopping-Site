const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const config = require('../config.js');
const axios = require('axios');
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const options = { headers: {'Authorization': `${config.TOKEN}`}};

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`Example app listening at port: ${port}`)
});

app.get('/products', (req, res) => {
  axios.get(`${apiUrl}/products`, options)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    })
})

app.get('/products/:product_id', (req, res) => {
  var id = req.params.product_id
  axios.get(`${apiUrl}/products/${id}`, options)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    })
})

app.get('/products/:product_id/styles', (req, res) => {
  var id = req.params.product_id
  axios.get(`${apiUrl}/products/${id}/styles`, options)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    })
})

app.get('/reviews', (req, res) => {
  var id = req.query.product_id
  axios.get(`${apiUrl}/reviews?product_id=${id}`, options)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    })
})

app.get('/reviews/meta', (req, res) => {
  var id = req.query.product_id
  axios.get(`${apiUrl}/reviews/meta?product_id=${id}`, options)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    })
})

app.get('/qa/questions', (req, res) => {
  var id = req.query.product_id
  axios.get(`${apiUrl}/qa/questions?product_id=${id}`, options)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    })
})

app.post('/qa/questions', (req, res) => {
  console.log(req.body)
  axios.post(`${apiUrl}/qa/questions`, req.body, options)
    .then((response) => {
      console.log(response.data)
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    })
})

app.post('/qa/questions/:question_id/answers', (req, res) => {
  var id = req.params.question_id;
  console.log(req.body)
  axios.post(`${apiUrl}/qa/questions/${id}/answers`, req.body, options)
    .then((response) => {
      console.log(response.data)
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    })
})



app.put('/qa/questions/:question_id/helpful', (req, res) => {
  var id = req.params.question_id;
  var count = req.body.question_helpfulness
  count++
  var data = { question_helpfulness: count}
  axios.put(`${apiUrl}/qa/questions/${id}/helpful`, data, options)
    .then((response) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    })
})

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  console.log(req.body)
  var id = req.params.answer_id;
  var count = req.body.helpfulness
  count++
  var data = { helpfulness: count}
  console.log(data)
  axios.put(`${apiUrl}/qa/answers/${id}/helpful`, data, options)
    .then((response) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    })
})



app.put('/qa/answers/:answer_id/report', (req, res) => {
  console.log(req.body)
})