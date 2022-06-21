import { useState, useEffect } from 'react'
import Link from 'next/link'
import useSwr from 'swr'
import { swrFetchPosts } from '../../services/post.js' 
import { fetchUsers } from '../../services/user.js' 

const CSR = (props) => {
  const [ loading, setLoading ] = useState(true)
  const [ refresh, setRefresh ] = useState(true)
  const [ users, setUsers ] = useState([])

  const { error, data } = useSwr(`${process.env.NEXT_PUBLIC_backend_root_url}/posts`, swrFetchPosts )

  useEffect(() => {
    async function getUser(){
      const data = await fetchUsers()
      setUsers(data)
      setLoading(false)
    }
    getUser()
  }, [refresh])

  if(error) return <h5>Error loading</h5>
  if(!data) return <h5>loading...</h5>
  return (
    <>
      <Link href='/'><a>&#708; home</a></Link>
      <h5>csr</h5>
      <p>list of posts(swr</p>
      <ul>
        {
          data.map(post => (
            <li key={post._id}>
              <Link href={`/csr/posts/${post._id}`}><a>{post.id} - {post.title}</a></Link>
            </li>
          ))
        }
      </ul>
      <h5>csr</h5>
      <p>list of users(useEffect</p>
      <button onClick={() => setRefresh(!refresh)}>refresh</button>
      <ul>
        { !loading && 
          users.map(user => (
            <li key={user._id}>
              <Link href={`/csr/users/${user._id}`}><a>{user.name}</a></Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default CSR
