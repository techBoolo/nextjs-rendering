import { useRouter } from 'next/router'
import { fetchPost } from '../../../services/post.js'

const Post = ({ post }) => {
  const router = useRouter()

  return (
    <>
      <button onClick={() => router.back()}>back</button>
      <h5>{post.id} - {post.title}</h5>      
      <p>{post.body}</p>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context 
  const data = await fetchPost(params.id)

  return {
    props: {
      post: data
    }
  }
}

export default Post
