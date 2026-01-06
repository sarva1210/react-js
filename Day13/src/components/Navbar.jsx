import React, { useState } from 'react'

const Navbar = (props) => {

  const [newTheme, setNewTheme] = useState('')

  return (
    <div className='nav' style={{ backgroundColor: props.theme }}>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.changeTheme(newTheme)
        setNewTheme('')
      }}>
        <input 
        value={newTheme}
        onChange={(e)=>{
          setNewTheme(e.target.value)
        }}
        type="text" 
        placeholder='Enter theme (red / #000 / rgb)' 
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Navbar