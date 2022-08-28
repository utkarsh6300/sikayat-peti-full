const express=require('express');
const auth = require('../middleware/auth');
const router=express.Router();
const Query =require('../model/queryschema');

router.post('/',[auth],async(req,res)=>{
  
    const {  query }=req.body;
    // console.log(formData);
    // console.log(req.body);
    try{
      // console.log(req.user);
     const id=req.user.id;
   let storequery= new Query({
    id,
    query
   });
   await storequery.save();
       res.send('query saved');
}
       catch(err){
        // console.error(err.message,'hello');
        res.status(500).send('server error');
      }
});
module.exports=router;
