import useSwr from 'swr'
import Link from 'next/link'
import { swrFetchPosts } from '../../services/post.js'

const Posts = (props) => {
  const { data, error } = useSwr(`${process.env.NEXT_PUBLIC_backend_root_url}/posts`, swrFetchPosts)

  if(error) return <h5>Error loading</h5>
  if(!data) return <h5>loading...</h5>
  return (
    <>
      list of posts      
      <ul>
        {
          data.map(post => (
            <li key={post._id}>
              <Link href={`/ssg/posts/${post._id}`}><a>{post.id} - {post.title}</a></Link>
            </li>
          ))        
        }
      </ul>
    </>
  );
};

export default Posts
