import Link from 'next/link'
import { fetchUsers } from '../../services/user.js'
import { fetchPosts } from '../../services/post.js'

const SSR = ({ users, posts }) => {

  return (
    <>
      <Link href='/'><a>&#708; home</a></Link>
      <h5>ssr</h5>
      <h5>List of users</h5>
      <ul>
        {
          users.map(user => (
            <li key={user.id}>
              <Link href={`/ssr/users/${user._id}`}><a>{user.name}</a></Link>
            </li>
          ))
        }
      </ul>
      <Link href='/ssr/users'><a>users...</a></Link>

      <h5>ssr</h5>
      <h5>List of posts</h5>
      <ul>
        {
          posts.map(post => (
            <li key={post._id}>
              <Link href={`/ssr/posts/${post._id}`}><a>{post.title}</a></Link>
            </li>
          ))
        }
      </ul>
      <Link href='/ssr/posts'><a>posts...</a></Link>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { query } = context
  const userData = await fetchUsers(query)
  const postData = await fetchPosts(query)

  return {
    props: {
      users: userData,
      posts: postData
    }
  }
}
export default SSR
