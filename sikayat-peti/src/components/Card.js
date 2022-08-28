
import React, { useState } from 'react'
import Button from './Button';

const Card = ({query,open}) => {
  let [name ,setname]= useState('Upvote');
  const togglestate =(e)=>{
     if(e.target.name==='Upvote') setname('Upvote');
     if(e.target.name==='Remove Upvote') setname('Remove Upvote');
      // console.log(e.target.name);
  }
  return (
    <div className="cards">
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum possimus, est ea quisquam inventore beatae ut, maxime rerum modi illum esse vitae neque fugiat. Saepe beatae ut suscipit? Placeat doloribus rem commodi culpa!</p> */}
       <p>{query}</p>
     { open && (name==='Remove Upvote'? <Button style='btn2' clr='green' name='Upvote' clicked={togglestate}/> :
        <Button style='btn2' clr='red' name='Remove Upvote' clicked={togglestate}/>)}
    </div>
  )
}

export default Card