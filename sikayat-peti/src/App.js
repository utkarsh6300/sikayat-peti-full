import Navbar from "./components/Navbar";

import './App.css';

import Footer from "./components/Footer";

import Login from "./components/Login";
import Main from "./components/Main";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import axios from 'axios';
// import {useEffect,useState} from 'react';
//  import { Provider } from 'react-redux';
// import store  from "./redux/store";



// async function  fetch1() {
//   try {
//   const res= await axios.get('api/openquery');
//   // const data= await res.json();
//     console.log(res.data);
//     setData(res.data);
//   }
//    catch (error) {
//      console.log(error);
//    }
//  }

const  App=()=> {
  // const [data,setData]=useState(
  //   [
      
  //   ]);
  //   async function  fetch1() {
  //     try {
  //       const res= await axios.get('api/query');
  //       // const data= await res.json();
  //       console.log(res.data[0]);
  //       setData(res.data);
  //     }
  //     catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   useEffect(() => {
  //    fetch1();
  //     }, []);


//     async function  fetch2(formData) {
//       const config = {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }
//       try {
//         const res1 = await axios.post('/api/register', formData, config);
//         localStorage.setItem("our-token",res1.data.token);
//  console.log(res1)
//         }
      
//       // const res= await axios.post('api/register');
//       // // const data= await res.json();
//       //   console.log(res.data[0]);
//       //   setData(res.data);
      
//        catch (error) {
//          console.log(error);
//        }
//      }
//     const [email,setEmail]=useState("b@y.in");
//     const [name,setName]=useState("utk");
   
//     useEffect(() => {
//    fetch2({email,name});
//     }, []);
 
  var isauth=false;
  const access_token=sessionStorage.getItem('access_token');
  const our_token=sessionStorage.getItem('our_token');
 if(access_token) isauth=true;
  // verify using access_token from google whether authenticated or not if yes set is auth to true;
  
  return (
    // <Provider store={store}>
    <>
    <div className="container">
    <Navbar isauth={isauth}/>
  { isauth?  <Main /> :  <Login/>  }  
    <Footer/>
    </div>
    </>
    // </Provider>
  );
}

export default App;
