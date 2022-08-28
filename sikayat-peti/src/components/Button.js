import React from 'react'

const Button = (props) => {

  
  return (
    <>
    <button className={`btn ${props.style}`} onClick={props.clicked}
    style={{backgroundColor:props.clr}} name={props.name}
    >
      {props.name}
      </button>
    </>
  )
}

export default Button