const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json()); // for parsing application/json

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/sales/:pato', function (req, res) {
  //console.log('linha 9 ', req.query)
  res.status(200).json({
    code: 200,
    message: `Hello fucking World ${req.query.name}`,
    paramValue: req.params.pato
  });
});

app.post('/users', function (req, res){
  res.status(200).json(req.body);
});

app.get('/sales', async function  (req, res){
  const response = await axios.get('https://api.mercadolibre.com/sites/MLB/search',{
    params: {
      nickname: req.query.nickname
    }
  })
  res.status(200).json(response.data)
});

app.listen(3000); 