import React from 'react'
import Card from './Card'

const Closed = ({data}) => {
  const x=false;
  return (
    <div className='box'>
      { data.map((dat)=>(
        !dat.open&& <Card key={dat._id} query={dat.query} open={x}/>
         ))}
    </div>
  )
}

export default Closed 