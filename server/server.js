const express = require('express');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const app = express();

//true :allow to parse extended body with rich data
//false: simple body for url encoded data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());

app.use('/api/countries', apiRouter);

//CORS Access
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'POST, GET');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type:application/json',
    'Accept Header:application/json',
  );
  next();
});

app.listen(process.env.PORT || '3004', () => {
  console.log(`server is up on port: ${process.env.PORT || '3004'}`);
});
