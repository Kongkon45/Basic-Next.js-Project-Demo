import React from 'react'

const getBlog = async (id) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
  return result.json()
}

export default getBlog