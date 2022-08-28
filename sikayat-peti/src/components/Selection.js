import React from 'react'
import Button from './Button'
import Open from './Open';
import Closed from './Closed';
import { useState,useEffect } from "react";
import axios from 'axios';

const Selection = () => {
  const [data,setData]=useState(
    [
      
    ]);
    async function  fetch1() {
      try {
        const res= await axios.get('api/query');
        // const data= await res.json();
        // console.log(res.data[0]);
        setData(res.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
     fetch1();
      }, []);
  let [name ,setname]= useState('Open');
  const togglestate =(e)=>{
     if(e.target.name==='Open') setname('Open');
     if(e.target.name==='Closed') setname('Closed');
      // console.log(e.target.name);
      fetch1();

  }
  return ( 
  <>
    <div className='select'>
        <Button name="Open"style='special 1' clr='rgb(174, 75, 183)' clicked={togglestate}/>
        <Button name="Closed" style='special 2' clr='rgb(74, 75, 183)' clicked={togglestate}/>
    </div>
       {name==='Open'? <Open data={data}/> : <Closed data={data}/>}
  </>
  )
}

export default Selection;