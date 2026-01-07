import React, { useContext } from 'react'
import { PostDataContext } from '../context/PostContext'

const Sections = () => {

  const data = useContext(PostDataContext)
  console.log(data);

  return (
    <div className='h-120 bg-zinc-300'>
      <h1 className='text-xl'>All Sections</h1>
    </div>
  )
}

export default Sections