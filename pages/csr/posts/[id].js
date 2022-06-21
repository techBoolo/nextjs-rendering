import { useState } from 'react'
import useSwr from 'swr'
import { swrFetchPost } from '../../../services/post.js'

import { useRouter } from 'next/router'
const Post = (props) => {
  const router = useRouter()
  const { id } = router.query

  const { error, data } = useSwr(`${process.env.NEXT_PUBLIC_backend_root_url}/posts/${id}`, swrFetchPost)

  if(error) return <h5>Error loading</h5>
    if(!data) return <h5>loading...</h5>

  return (
    <>
      <button onClick={() => router.back()}>&#706; back</button>
      <h5>csr(swr</h5>
      <h5>{data.id} - { data.title}</h5>      
      <p>{data.body}</p>
    </>
  );
};

export default Post
