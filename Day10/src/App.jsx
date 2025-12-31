import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {

  const [username, setUsername] = useState('')
  const [num, setNum] = useState(0)
  const [image, setImage] = useState('')

  const getData = async () => {
    const response = await axios.get('https://randomuser.me/api/')
    const user = response.data.results[0]

    setUsername(`${user.name.first} ${user.name.last}`)
    setImage(user.picture.large)
  }

  useEffect(() => {
    getData()
  }, [num])

  return (
    <div className="app">

      <img src={image} alt="User" className="avatar" />

      <div className="username">{username}</div>

      <div className="counter">{num}</div>

      <button onClick={() => setNum(num + 1)}>
        Fetch New User
      </button>
    </div>
  )
}

export default App

