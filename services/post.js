export const fetchPosts = async (query={}) => {
  const qs = Object.keys(query).map(k => {
    return `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`
  }).join('&')
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_backend_root_url}/posts?${qs}`)
    return await response.json()
  } catch (error) {
    throw error
  }
}

export const fetchPost = async (id) => {
  try {
    const response = await fetch(`${process.env.backend_root_url}/posts/${id}`)
    return await response.json()
  } catch (error) {
    throw error
  }
}

export const getPostIds = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_backend_root_url}/posts/ids`)
    return await response.json()
  } catch (error) {
    throw error
  }
}

export const swrFetchPosts = async (...args) => {
  try {
    const response = await fetch(...args)
    return await response.json()
  } catch (error) {
    throw error
  }
}

export const swrFetchPost = async (...args) => {
  try {
    const response = await fetch(...args)
    return await response.json()
  } catch (error) {
    throw error
  }
}
export const updatePost = async (id, data) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_backend_root_url}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(data)
  }) 
  if(!response.ok) {
    const error = new Error('error updating')
    error.info = await response.json()
    error.status = response.status
    throw error
  }
  return await response.json()
}
