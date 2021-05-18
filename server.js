var express = require('express');
var routes = require('./routes');
// import sequelize connection
var sequelize = require('./config/connection');

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });

})









