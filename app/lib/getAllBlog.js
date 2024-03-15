import React from 'react'

const  getAllBlog = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
  return result.json()
}

export default getAllBlog