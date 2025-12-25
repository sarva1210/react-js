import React from "react"
import Navbar from "./Components/Navbar"

const App = () =>{
  return (
    <div>
      <Navbar title='Sheryians' color='seagreen' links={['Home', 'About', 'Account', 'Contact']} />
      <Navbar title='Apple' color='Black' links={['Home', 'Services', 'Cources', 'Contact']} />
      <Navbar title='Nykaa' color='pink' links={['Home', 'Product', 'Men', 'Womens']} />
    </div>
  )
}

export default App
