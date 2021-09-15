//require the express
const express = require('express');
const port = 8001;
const path = require('path');
const db = require('./config/mongoose');
const Contact = require('./models/contact');
const app = express();
//set view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//to use static files
app.use(express.static('assets'));
//to read inputs from form
app.use(express.urlencoded());

//populating the db
app.post('/create-contact',function(req,res){

  Contact.create({
    name:req.body.name,
    phone:req.body.phone
  },function(err,newContact){

    if(err){
      console.log("Error in creating contact"); return;
    }
    console.log('********' , newContact);
    return res.redirect('back');
  });
});
// fetching data from data base
app.get('/',function(req,res){
   
  Contact.find({},function(err,Contacts){
     
    if(err){
      console.log('Error in fetching data');return;
    }
           
    return res.render('home',
    {
      title:"Contact App",
      contacts:Contacts
    });
});

});

//deleting a contact from db

app.get('/delete-contact/' , function(req,res){
    
  //id from url
  let id = req.query.id;
  Contact.findByIdAndDelete(id,function(err){
    if(err){
      console.log('Error  deleting');return;
    }
  });

  return res.redirect('back');
});

app.listen(port,function(err){
  if(err){
    console.log('Error',err);return;
  }
  console.log('Server up:' , port);
})