import React from 'react'
import Card from './Card'
 
// import axios from 'axios';

// import  { useEffect } from 'react'
// let res;
// async function  fetch1() {
//   try {
//    res= await axios.get('api/openquery');
//     console.log(res);
    
//   }
//    catch (error) {
//      console.log(error);
//    }
//  }

// const data="iy";


const Open = ({data}) => {
 const x=true;
  // fetch1();
  return (
    <div className='box'>
         { data.map((dat)=>(
        dat.open &&  <Card key={dat._id} query={dat.query} open={x}/>
         ))}

        {/* <Card data={res.json()}/> */}
        {/* <Card/> */}
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> */}
       
    </div>
  )
}

export default Open