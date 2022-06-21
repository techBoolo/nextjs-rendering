import { useState } from 'react'
import useSwr from 'swr'
import { useRouter } from 'next/router'
import { swrFetchPost } from '../../../services/post.js'

import EditPost from '../../../components/posts/edit.js'

import Link from 'next/link'
const Post = (props) => {
  const [ show, setShow ] = useState(false)
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSwr(`${process.env.NEXT_PUBLIC_backend_root_url}/posts/${id}`, swrFetchPost)

  return (
    <>
      <Link href='/ssg'><a>&#706; back</a></Link>
      { error ? <h5>Error fetching data</h5>
        : !data ? <h5>loading...</h5>
        :
        <>
          <h5>csr</h5>
          <p>{data.id} - { data.title}</p> 
          <p>{data.body}</p>
          { show 
            ? <EditPost post={data} setShow={setShow} />
            : <button onClick={() => setShow(true)}>edit</button>
          }
        </>
      }
    </>
  );
};

export default Post
