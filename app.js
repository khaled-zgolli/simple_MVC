const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routers/userRouter');

const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine','ejs');


app.get('/sign-in',function(req,res){

    res.render('signin',{error:true});

});

app.get('/sign-up',function(req,res){

    res.render('signup');

});


app.use('/',userRouter);



app.listen(3000,function(){
    console.log('server staeted on port 3000 ');
})