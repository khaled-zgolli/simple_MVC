const User=require('../models/userModel');
const mongoose = require('mongoose');


exports.addUser= function(req,res){
    const new_user=new User({
     name :req.body.name,
     email :  req.body.email,
     password1:  req.body.pass,
     terms: req.body.term
 });

 new_user.save(function(err){
     if(err){
         console.log(err);
         res.redirect('/sign-up');
     }
     else{
        console.log('user added');
        res.redirect('/sign-in');
     }
 });
}

exports.sign_in= function(req,res){
    const name=req.body.your_name;
     const pass=req.body.your_pass;

     User.findOne({name : name},function(err,userName){
         
         if(err){
             console.log('err');
            
         }
         else{
             if(userName){
                 User.findOne({password1 : pass},function(err,foundPss){
                     if(err){
                         console.log(err);
                     }
                     if(foundPss){
                        res.send('connected');
                     }
                     else{
                        res.render('signin',{error:false}); 
                     }
                 })
             }
             else{
                res.render('signin',{error:false});
                
    
             }
         }
         
      })
}