import Link from 'next/link'
import { useRouter } from 'next/router'

import { fetchUsers } from '../../../services/user.js'

const Users = ({ users }) => {
  const router = useRouter()

  return (
    <>
      <button onClick={() => router.back()}>&#706; back</button>
      <h5>ssr</h5>
      <h5>users</h5>
      <ul>
      {
        users.map(user => (
          <li key={user._id}>
            <Link href={`/ssr/users/${user._id}`}><a>{user.name}</a></Link>
          </li>
        ))
      }
      </ul>
    </>
  );
};

export const getServerSideProps = async (context) => {
  
  const data = await fetchUsers()

  return {
    props: {
      users:  data
    }
  }
}
export default Users
