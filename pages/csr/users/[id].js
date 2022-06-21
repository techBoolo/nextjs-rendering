import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { fetchUser } from '../../../services/user.js'

const User = (props) => {
  const [ user, setUser ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const router = useRouter()

  const { id } = router.query

  useEffect(() => {
    async function getUser(id){
      const data = await fetchUser(id)
      setUser(data)
      setLoading(false)
    }
    getUser(id)
  }, [id])

  return (
    <>
      <h5>csr(useEffect</h5>
      <Link href='/csr'><a>&#706; back</a></Link>
      { loading ? <h5>loading...</h5>
        :
        <>
          <h5>{user.name}</h5>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
          <p>Phone: {user.phone}</p>
          <p>Company: {user.company.name}</p>
        </>
      }
    </>
  );
};

export default User
