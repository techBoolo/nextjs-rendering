import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { fetchPosts, swrFetchPosts  } from '../../../services/post.js'

const Posts = ({ posts }) => {
  const router = useRouter()
  const [ psts, setPsts ] = useState(posts)

  const handleSelect = async (ev) => {
    let qs = '';
    if(ev.target.value) {
      qs = `userId=${ev.target.value}`
    }
      const data = 
        await swrFetchPosts(`${process.env.NEXT_PUBLIC_backend_root_url}/posts?${qs}`)
      setPsts(data)
      router.push(`/ssr/posts?${qs}`, undefined, { shallow: true })
  }

  return (
    <>
      <button onClick={() => router.back()}>&#706; back</button>
      <p>ssr</p>
      <select name='userid' onChange={handleSelect}>
          <>
            <option value=''>user id</option>
            {
              Object.keys([...Array(10)]).map(k => (
                <option key={k} value={Number(k) + 1}>{+(k) + 1}</option>
              ))
            }
          </>
      </select>
      <h5>Posts</h5> 
      <ul>
        {
          psts.map(post => (
            <li key={post._id}>
              <Link href={`/ssr/posts/${post._id}`}><a>{post.title}</a></Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { query } = context
  const data = await fetchPosts(query)

  return {
    props: {
      posts: data
    }
  }
}
export default Posts
