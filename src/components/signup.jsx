import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getfcmtoken } from "../functionality/getfcmtoken";

export const Signup = memo((props) => {
  const [name, setName] = useState(String);
  let navigate = useNavigate();

  const addUser = () => {
    getfcmtoken(name);
    navigate("/NotficationSender");
  };
  return (
    <div className='signUp-container'>
      <input
      className='signup-input'
        type="text"
        value={name}
        autoFocus
        onChange={(e) => setName(e.target.value)}
      />
      {name.length > 3 && <button onClick={addUser}>Add me</button>}
    </div>
  );
});
