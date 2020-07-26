import React, {memo} from 'react'
import { useNavigate } from 'react-router-dom';
import {getfcmtoken} from '../functionality/getfcmtoken'
 export const Signup = memo((props)=>{

   let navigate = useNavigate();
   const addUser = () => {
    navigate('/NotficationSender')
    getfcmtoken()
   }
  return(
    <div>
      <input type="text" />
      <button onClick={addUser} >
        Add me
      </button>
    </div>
  )
})
