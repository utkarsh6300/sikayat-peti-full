const express=require('express');
const router=express.Router();
const Query =require('../model/queryschema');

router.get('/',[],async(req,res)=>{
    try{
  let data= await Query.find({open:true}).sort({ date: -1 });
  console.log(data);
  res.json(data);}
  catch(err){
    console.error(err.message);
    res.status(500).send('server error');
  }
});



module.exports=router;

  