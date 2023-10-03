const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/node-login', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,

    },
    name: {
        type: String,
        required: true,
    },
}) 

userSchema.pre('save',function(next){
    if(!this.isModified("password")){
        return next();
    }
    else {
        this.password=bcrypt.hashSync(this.password,12);
    }
})

userSchema.method.comparePassword=function(plaintext,callback){
    return callback(null,bcrypt.compareSync(plaintext,this.password))
}

const userModel=mongoose.model('User',userSchema)

module.exports=userModel