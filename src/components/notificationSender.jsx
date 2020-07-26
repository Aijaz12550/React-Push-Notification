import React, {memo} from 'react'

 export const NotificationSender = memo(()=>{
  return(
    <div>
      <input type="text" placeholder="title" />
      <textarea defaultValue='Notification send'  />
      <button> Send</button>
    </div>
  )
})
