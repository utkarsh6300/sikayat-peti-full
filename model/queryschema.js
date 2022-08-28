const mongoose= require('mongoose');

const QuerySchema= new mongoose.Schema({

 id:{
     type: String,
     required:true
 },
 query:{
     type:String,
     required:true,
     unique:true
 },
 open:{
     type:Boolean,
     default:true
 },
 date:{
     type:Date,
     default:Date.now
 }

});


module.exports=Query=mongoose.model('query',QuerySchema);