// include mongoose

const mongoose = require('mongoose');
//connect to the database running in background
mongoose.connect('mongodb://localhost/Todo_development');
const db = mongoose.connection;

// if the db is not connected
db.on('error',console.error.bind(console,'Error Connecting to db'));

// if it is connected
db.once('open',function(){
  console.log('Succesfullt connected to mongodb');
});
 
//export it to be available globally
module.exports = db;