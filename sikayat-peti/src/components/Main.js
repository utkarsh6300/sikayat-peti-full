import React from 'react'
import Selection from './Selection' 
import RaiseQuery from './RaiseQuery' 

const Main = () => { 

  return (
    <> 
   {/* { data.map((dat)=>(<p key={dat.id}>{dat.query}</p>))} */}
   
     <Selection />
    <RaiseQuery/>
    </>
  )
}

export default Main