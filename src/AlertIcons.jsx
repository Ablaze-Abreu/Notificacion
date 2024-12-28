import React from 'react'
import { BsCheckCircleFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";
import { useState } from 'react';
function AlertIcons() {
    const [Alert,Notalert]=useState(false)
      
    const klk=()=>{
      <h1>hola klk</h1>
    }

  
  return (
    <div className='alerts'> 
      {
        Alert ? {klk}:<h1>Como estas</h1>
      }
    </div>
  )
}

export default AlertIcons