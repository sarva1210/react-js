import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-4 bg-gradient-to-r from-stone-700 to-stone-600 shadow-lg sticky top-0 z-50'>
      <h1 className='text-stone-100 text-xl font-semibold tracking-wide' >Navbar</h1>
      <input className='px-4 py-1 rounded-md bg-stone-100 text-stone-800 outline-none focus:ring-2 focus:ring-stone-400' type="text" />
      <div className='flex gap-8 text-stone-100 font-medium'>
        <Link className='hover:text-stone-300 transition' to='/'>Home</Link>
        <Link className='hover:text-stone-300 transition' to='/about'>About</Link>
        <Link className='hover:text-stone-300 transition' to='/product'>Product</Link>
        <Link className='hover:text-stone-300 transition' to='/product/MenProduct'>MenProduct</Link>
        <Link className='hover:text-stone-300 transition' to='/product/Women'>WomenProduct</Link>
        <Link className='hover:text-stone-300 transition' to='/courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
