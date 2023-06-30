import { useState } from "react";

export const Form = () => {

  const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()
      
      if(name.length < 5 || !isValidEmail(email)) {
          setMessage('Please verify your information!')
      }else{
          setMessage(`Thank you so much! we will contact you`)
      }
  }

  return (
      <form onSubmit={handleSubmit}>
          <input onChange={e=>setName(e.target.value)} type="text" placeholder='name...' />
          <input onChange={e=>setEmail(e.target.value)} type="email" placeholder='email...' />
          <button onClick={handleSubmit}>Send message</button>
          {message && <p className='message'>{message}</p>}
      </form>
  )
}