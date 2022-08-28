const express=require('express');
const router=express.Router();
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
const Register =require('../model/registerschema');
const config=require('config');
router.post('/',[],async(req,res)=>{
    const {name,email }=req.body;
    try {
        let storeregister= new Register({
            name,
            email
           });
           const rs1= await Register.find({email:email});
          //  console.log(rs1);
           let id;
      if(rs1.length){
        id=rs1[0].id;
        // console.log(rs1[0].id);
        // res.status(200).send('user already registered');
      }
      else {
       const rs=    await storeregister.save();
      //  console.log(rs,'hello');
        id=rs.id;
      }
      // console.log(rs1);
       const payload={
        user:{
          id:id
        }
      }
       jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn:'24h' },
        (err,token)=>{
          if(err) throw err;
          res.json({token});
        }
        );

    //    const name=rs.name;
      //  console.log(rs);
            //    res.status(200).send('user data saved');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }

});
module.exports=router;