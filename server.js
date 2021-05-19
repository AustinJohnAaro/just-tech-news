var express = require('express');
var routes = require('./routes');
require('dotenv').config()
// import sequelize connection
var sequelize = require('./config/connection');

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);



app.get('/', (req, res) => {
  res.send(process.env.SECRET_KEY);
})
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`)
})







