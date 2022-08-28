const express=require("express");
const app= express();
// const cors=require('cors')
const connectDB=require('./config/db');

//connect database
connectDB();

// app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('API RUNNING');
   })
  
app.use('/api/storequery',require('./api/storequery'));
app.use('/api/query',require('./api/query'));
// app.use('/api/closedquery',require('./api/closedquery'));
app.use('/api/register',require('./api/register'));


const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
});