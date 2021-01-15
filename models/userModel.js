const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/loginDB', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    name :String, 
    email: {type: String, required:true},
    password1: {type: String, required:true},
    terms: {type: String, required:true}

});

const User=mongoose.model('User',userSchema);

module.exports = User;