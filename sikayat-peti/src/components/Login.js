import axios from 'axios';
import React from 'react'

import GoogleLogin from 'react-google-login';
  


async function  fetch2(formData) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    // console.log(formData);
    const res1 = await axios.post('/api/register', formData, config);
    sessionStorage.setItem("our_token",res1.data.token);
// console.log(res1)
    }
   catch (error) {
     console.log(error);
   }
 }





const FailureResponseGoogle=(response)=>{
   

  console.log(response);
};
const SucessResponseGoogle=(response)=>{
  const email=response.profileObj.email;
  const name=response.profileObj.name;
fetch2({email,name});
sessionStorage.setItem("access_token",response.tokenObj.access_token);
window.location.reload(false);
  // console.log(response);

};

const Login = () => {
  return (
    <>
    <div className="login">
      {/* <button>LogIn with Google</button> */}
      <GoogleLogin
    clientId="272432979889-bh8sisgfg2dm2drf52ks49u6in7pn2gm.apps.googleusercontent.com"

    buttonText="Login with google"
    onSuccess={SucessResponseGoogle}
    onFailure={FailureResponseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
    </>
  )
}

export default Login