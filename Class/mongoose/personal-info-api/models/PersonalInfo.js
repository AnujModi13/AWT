const mongoose=require('mongoose');

const personalInfoSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },

})

module.exports=mongoose.model("PersonalInfo",personalInfoSchema);