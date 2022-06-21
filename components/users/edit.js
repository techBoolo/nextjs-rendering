import { useRouter } from 'next/router'
import { useState } from 'react'
import { updateUser } from '../../services/user.js'

const EditUser = ({showEdit, user}) => {
  const [ email, setEmail ] = useState(user.email)
  const [ phone, setPhone ] = useState(user.phone)
  const [ website, setWebsite ] = useState(user.website)
  const router = useRouter()

  const [ updating, setUpdating ] = useState(false)

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    setUpdating(true)
    const data = { email, phone, website }
    const response = await updateUser({id: user._id, data})
    // this will request a re-render of the post
    router.push(router.asPath)
    showEdit(false)
  }

  return (
    <>
    { updating 
      ? <h5>updating in progress...</h5> 
      :
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' value={email} onChange={(ev) => setEmail(ev.target.value) } /> 
        </p>
        <p>
          <label htmlFor='phone'>Phone: </label>
          <input value={phone} id='phone' onChange={(ev) => setPhone(ev.target.value) } /> 
        </p>
        <p>
          <label htmlFor='website'>Website: </label>
          <input value={website} id='website' onChange={(ev) => setWebsite(ev.target.value) } /> 
        </p>
        <button type='submit'>update</button>
        <button onClick={() => showEdit(false) }>cancel</button>
      </form>
    }
    </>
  );
};

export default EditUser
