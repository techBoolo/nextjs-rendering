import { useState, useEffect } from 'react'
const Message = ({ message }) => {
  const [ msg, setMsg ] = useState(message)
  

  useEffect(() => {
    setTimeout(() => {
      setMsg(null)
    }, 5000)
  }, [])
  return (
    <div>
      { msg?.message } 
    </div>
  );
};

export default Message
