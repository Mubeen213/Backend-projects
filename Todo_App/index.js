const express = require('express');
const app = express();
const port  = 8000;

// require db
const db = require('./config/mongoose');

// include the views folder
app.set('view engine','ejs');
app.set('views','./views');

// include assets
app.use(express.static('./assets'));

// read the form inputs from browser
app.use(express.urlencoded());

// include the routes
app.use('/',require('./routes'));

// fire up the server
app.listen(port,function(err){
  if(err){
    console.log(`error in running server:${err}`);
  }

  console.log(`Server up at port : ${port}`);
})