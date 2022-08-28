const jwt=require('jsonwebtoken');
const config=require('config');
module.exports= function (req,res,next) {
 //get token from header
 const our_token=req.header('our_token');
 const access_token=req.header('access_token');
//  console.log(our_token,access_token);
// //  console.log(req);
// console.log(JSON.stringify(req.headers))
 
 //check if not token
 if(!our_token||!access_token){
  
     return res.status(401).json({msg:"No token,authorization denied"});
 }
// verify token
try{
    const decoded=jwt.verify(our_token,config.get('jwtSecret'));
    console.log(decoded);
    req.user=decoded.user;

    next();
}catch(err){
  res.status(401).json({msg:"Token is not valid"});
}

}

