
// include mongoose
const mongoose = require('mongoose');

//connect to database running in background
mongoose.connect('mongodb://localhost/Todo_development');
const db = mongoose.connection;

// if db is not connected
db.on('error',console.error.bind(console,"Error in connecting to db"));

db.once('open',function(){
  console.log('Succesfully connected to db');
});

// export it to availbale globally
module.exports = db;