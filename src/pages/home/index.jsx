import React,{useCallback,useState} from 'react'
import { useEffect } from 'react';
import {useNavigate} from "react-router-dom";

import './style.css';
 const Homepage=()=> {
 
  const[value , setvalue]=useState();

  const navigate=useNavigate();

  const handleJoinRoom=useCallback(()=>{
    navigate(`/room/${value}`);
  },[navigate,value]);

  return (
<div className="UI" >
    <h2 className='info'>Please Enter the Meeting Code</h2>
      
      <input className="input" value={value} onChange={(e)=>setvalue(e.target.value)} type="text" palceholder="Enter Room Code"/>
      <button className="btn" onClick={handleJoinRoom}>JOIN</button>
    </div>
  
  
  )
}

export default Homepage;