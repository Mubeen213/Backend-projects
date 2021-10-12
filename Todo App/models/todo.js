
// create the db schema

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  categories:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  deadline:{
    type:String,
    required:true
  }
});

const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;