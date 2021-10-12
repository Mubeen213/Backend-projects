
const Todo = require('../models/todo');
module.exports.home = function(req,res){
  
  Todo.find({},function(err,Todos){
    if(err){
      console.log('Error in fetching the data');
    }
    console.log(Todos);
    return res.render('home',{
      title:'Todo App',
      tasks:Todos
    });
 
  });
}

// populating the db
module.exports.createTask = function(req,res){
  console.log("loaded",req.body);
  Todo.create({
    categories:req.body.categories,
    description:req.body.description,
    deadline:req.body.date
  },function(err,newTask){
    if(err){
      console.log('error in populating db');return;
    }
    return res.redirect('back');
  });
}

// deting from db
module.exports.deleteTask = function(req,res){
  console.log(req.body,"Deleting task");

  let idCollection = req.body.task;

    console.log(typeof(idCollection));

    // If req.body is empty, i.e task is not seleted, then idCollection will be undefined.
    if(idCollection == undefined){
        return res.redirect('back');
    }

    // if only one is selected to delete
    if(typeof(idCollection) === "string"){
        Todo.findByIdAndDelete(idCollection, function(err){
            if(err){
                console.log('error in deleting the task');
                return;
            }
        });
        return res.redirect('back');
    }

    // else if it is object (in case of multiple delete)
    for(let id of idCollection){
        Todo.findByIdAndDelete(id, function(err){
            if(err){
                console.log('error in deleting the task');
                return;
            }
        });
    }

    return res.redirect('back');

}