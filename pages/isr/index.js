import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { fetchPosts } from '../../services/post.js'
import { fetchUsers } from '../../services/user.js'

const ISR = ({ posts } ) => {
  const [ psts, setPsts ] = useState(posts)
  const [ users, setUsers ] = useState([])
  const router = useRouter()
  const { query } = router
  const sp = new URLSearchParams(query)

  const handleUsers = async (ev) => {
    const data = await fetchUsers()
    setUsers(data)
  }

  const handleUsersClear = () => {
    setUsers([])
  }
  return (
    <>
      <Link href='/'><a>&#708; home</a></Link>
      <p>isr</p>
      <p>posts</p>
      <ul>
        {
          psts.map(post => (
            <li key={post._id}>
              <Link href={`/isr/posts/${post._id}`}><a>{post.id} - {post.title}</a></Link>
            </li>
          ))
        }
      </ul>
      <button onClick={handleUsers}>users</button>
      <button style={{ "margin-left": "10px" }} onClick={handleUsersClear}>hide</button>
      <ul>
        {
          users.map(user => (
            <li key={user._id}>{user.name}</li>
          ))
        }
      </ul>
    </>
  );
};

export const getStaticProps = async (context) => {
  const data = await fetchPosts()

  return {
    props: {
      posts: data
    },
    revalidate: 10
  }
}

export default ISR
