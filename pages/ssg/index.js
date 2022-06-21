import Link from 'next/link'
import { fetchUsers } from '../../services/user.js'

import Posts from '../../components/posts/'

const SSG = ({ users }) => {

  return (
    <>
      <Link href='/'><a>&#708; home</a></Link>
      <h5>ssg</h5>
      <p>List of users</p>
      <ul>
        {
          users.map(user => (
            <li key={user._id}>
              <Link href={`/ssg/users/${user._id}`}><a>{user.name}</a></Link>
            </li>
          ))
        }
      </ul>
      <h5>csr</h5>
      <Posts />
    </>
  );
};

export const getStaticProps = async () => {
  const users = await fetchUsers()

  return {
    props: {
      users
    }
  }
}
export default SSG
