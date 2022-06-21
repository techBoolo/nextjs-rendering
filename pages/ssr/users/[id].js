import { useState } from 'react'
import { useRouter } from 'next/router'
import { fetchUser } from '../../../services/user.js'
import EditUser from '../../../components/users/edit.js'

const User = ({ user } ) => {
  const [ edit, showEdit ] = useState(false)
  const router = useRouter()

  return (
    <>
      <button onClick={() => router.back()}>back</button>
      <h5>ssr</h5>
      <h5>{user.name}</h5>
      <p>Email: {user.email}</p> 
      <p>City: {user.address.city}</p> 
      <p>Website: {user.website}</p> 
      <p>Company: {user.company.name}</p> 
      { edit ? <>
          <h5>csr</h5>
          <EditUser showEdit={showEdit} user={user} />
        </>
        : <button onClick={() => showEdit(true)}>edit</button>
      }
    </>
  );
};

export const getServerSideProps = async (context) => {

  const { params } = context
  const data = await fetchUser(params.id)
  return {
    props: {
      user: data
    }
  }
}

export default User
