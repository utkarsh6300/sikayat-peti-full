 const mongoose= require('mongoose');
 const schema=mongoose.Schema;
  const RegisterSchema=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    }
    // ,
    // password:{
    //     type:String,
    //     required:true
    // }

  });
  module.exports=Register=mongoose.model('register',RegisterSchema);