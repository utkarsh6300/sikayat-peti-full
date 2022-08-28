import React from 'react';
// import Button from './Button';
const logout=(e)=>{
sessionStorage.removeItem("our_token");
sessionStorage.removeItem("access_token");
window.location.reload(false);
}
const Navbar = (props) => {

  return (
    <><div className="navbar">

    <h1> SIKAYAT PETI </h1>
   {props.isauth?<button onClick={logout}>Logout</button>:''}
    </div>
    </>
  )
};

export default Navbar; 