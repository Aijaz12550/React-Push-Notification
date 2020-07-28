import React, { memo, useState, useEffect } from "react";
import { getUsers } from "../functionality/getusers";
import { sendNotification } from "../functionality/sendNotification";

export const NotificationSender = memo(() => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getUsers(setUsers);
  }, []);
  return (
    <div className='no-sender'>
      <div className='no-sender-sub'>
        
      <div className="dropdown">
        <button className="dropbtn">
          {selectedUser ? selectedUser.user : "No User Selected"}
        </button>
        <div className="dropdown-content">
          {users.map((val, key) => (
            <a onClick={() => setSelectedUser(val)} key={key}>
              {" "}
              {val.user}{" "}
            </a>
          ))}
        </div>
      </div>
      <input
      className='title-input'
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="title"
        />
      <textarea
      className='message-input'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="message"
        />
      <button
        onClick={() => sendNotification({ title, message }, selectedUser.token)}
        >
        {" "}
        Send
      </button>
    </div>
        </div>
  );
});
