import { useState } from 'react'
import { updatePost } from '../../services/post.js'
const EditPost = ({ post, setShow }) => {

  const [ title, setTitle ] = useState(post.title)
  const [ body, setBody ] = useState(post.body)

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    try {
      const data = {title, body}
      await updatePost(post._id, data)
      setShow(false)
    } catch (error) {
      // show the user by setting a error state variable
      console.log('error from server: ', error.info.error.message);
      console.log('front end error message: ', error.message);
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>    
        <input value={title} onChange={(ev) => setTitle(ev.target.value) } /> 
        <textarea value={body} onChange={(ev) => setBody(ev.target.value) } /> 
        <button type='submit'>update</button>
      </form>
    </>
  );
};

export default EditPost
