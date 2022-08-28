import axios from 'axios';
import React, { useState } from 'react'

const RaiseQuery = () => {
  const access_token=sessionStorage.getItem('access_token');
  const our_token=sessionStorage.getItem('our_token');
  async function  store(query) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'our_token': our_token,
        'access_token': access_token
      }
    }
    try {
      const body = JSON.stringify({ query });
      const res1 = await axios.post('/api/storequery', body ,config);
     
      console.log(res1);
    }
    catch (error) {
       console.log('hello')
       console.log(error);
     }
   }
  

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(e);
        // console.log(query);
      store(query);

        setquery("");
    };
    let [query,setquery]=useState("");
  return (
    <> <div className="wrap">
      <h2>RaiseQuery</h2>
      <form className="form" onSubmit={handleSubmit}>
        <textarea  value={query} onChange={(e)=>setquery(e.target.value)} ></textarea>
        <button type="submit">submit</button>
       </form>
    </div>
    </>
  )
}

export default RaiseQuery