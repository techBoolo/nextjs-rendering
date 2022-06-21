import Link from 'next/link'
import { fetchUser, getUserIds } from '../../../services/user.js'

const User = ({user}) => {

  return (
    <>
      <Link href='/ssg'><a>&#706; back </a></Link>
      <h5>{user.name}</h5>
      <h5>{user.company.catchPhrase}</h5>
      <hr />
      <p>{user.email}</p>      
      <p>Web: {user.website}</p>      
      <p>Phone: {user.phone}</p>      
    </>
  );
};

export const getStaticPaths = async () => {
  const ids = await getUserIds()

  const paths = ids.map((id) => ({
    params: { id: id._id }
  }))

  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async (context) => {
  const { id } = context.params
  const user = await fetchUser(id)

  return {
    props: {
      user
    }
  }
}
export default User
