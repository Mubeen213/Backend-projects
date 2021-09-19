const express = require('express');
const app = express();
const port = 8000;

// set the view engine to ejs
app.set('view engine' , 'ejs');
app.set('views','./views');
// include routes
app.use('/',require('./routes'));

app.listen(port,function(err){

  if(err){
    console.log(`error in running server:${err}`);
  }

  console.log(`Server is up at ${port}`);
});