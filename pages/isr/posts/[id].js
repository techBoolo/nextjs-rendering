import { useRouter } from 'next/router'
import { getPostIds, fetchPost } from '../../../services/post.js'

const Post = ({ post }) => {
  const router = useRouter()


  if(router.isFallback) {
    return <h5>loading...</h5>
  }
  return (
    <>
      <button onClick={() => router.back()}>&#706; back</button>
      <h5>{ post.id } - {post.title}</h5> 
    </>
  );
};

export const getStaticPaths = async () => {
  const ids = await getPostIds()
  const paths = ids.map(id => ({
    params: { id }
  }))

  return {
    paths, 
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params

  const data = await fetchPost(id)
  return {
    props: {
      post: data
    },
    revalidate: 10
  }
}

export default Post
