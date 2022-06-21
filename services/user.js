export const fetchUsers = async (query={}) => {

  let queryString = ''
  queryString = Object.keys(query).map(k => {
    return `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`
  }).join('&')

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_backend_root_url}/users?${queryString}`)
    return await response.json()
  } catch (error) {
    throw error
  }
}

export const fetchUser = async (id) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_backend_root_url}/users/${id}`)
    return await response.json()
  } catch (error) {
    throw error
  }
}

export const getUserIds = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_backend_root_url}/users/ids`)
    return await response.json()
  } catch (error) {
    throw error
  }
}

export const updateUser = async({id, data}) => {
  try {
    const response =  await fetch(`${process.env.NEXT_PUBLIC_backend_root_url}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }) 

    if(!response.ok) {
      const error = new Error('error post updating')
      error.info = await response.json()
      error.status = response.status
      throw error
    }
    return await response.json()
  } catch (error) {
    throw error
  }
}
