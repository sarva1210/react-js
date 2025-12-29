import React from 'react'
import { useState } from 'react'
import Card from './Components/Card'

const App = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState("")
  const [userPhone, setUserPhone] = useState("")
  const [userCompany, setUserCompany] = useState("")
  const [userRole, setUserRole] = useState('')
  const [userImg, setUserImg] = useState('')

  const localData = JSON.parse(localStorage.getItem('all-users')) || []

  const [allUser, setAllUser] = useState(localData)

  const submitHandler =(e) =>{
    e.preventDefault()
   
    setAllUser([...allUser,{userName,userEmail,userPhone,userCompany,userRole,userImg}])

    setAllUsers(allUser)
    localStorage.setItem('all-users', JSON.stringify(allUser))


    setUserName('')
    setUserEmail('')
    setUserPhone('')
    setUserCompany('')
    setUserRole('')
    setUserImg('')
  }
  

  const deleteHandler = (idx)=>{
   const copyUser = [...allUser]
   copyUser.splice(idx,1)
   setAllUser(copyUser)
   
   localStorage.setItem('all-users', JSON.stringify(copyUsers))

  }

  return (
    <div className='h-screen bg-[#E1D4C2] text-white flex items-start gap-8 px-8 py-4 overflow-hidden'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='w-[380px] bg-[#BEB5A9] rounded-3xl p-6 shadow-2xl flex flex-col'>
        
        <h1 className='text-2xl font-bold text-center mb-4'>Add Contact</h1>

        <input 
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value);
        }}
        className='w-full mb-4 px-6 py-3 rounded-full bg-[#A78D78] text-lg font-medium focus:outline-none' 
        type="text" 
        placeholder='Enter your name'/>

        <input 
        value={userEmail}
        onChange={(e)=>{
          setUserEmail(e.target.value);
        }}
        className='w-full mb-4 px-6 py-3 rounded-full bg-[#A78D78] text-lg font-medium focus:outline-none' 
        type="Email" 
        placeholder='Email Address'/>

        <input 
        value={userPhone}
        onChange={(e)=>{
          setUserPhone(e.target.value);
        }}
        className='w-full mb-4 px-6 py-3 rounded-full bg-[#A78D78] text-lg font-medium focus:outline-none' 
        type="text" 
        placeholder='Phone Number'/>

        <input 
        value={userCompany}
        onChange={(e)=>{
          setUserCompany(e.target.value);
        }}
        className='w-full mb-4 px-6 py-3 rounded-full bg-[#A78D78] text-lg font-medium focus:outline-none' 
        type="text" 
        placeholder='Company Name'/>

        <input 
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value);
        }}
        className='w-full mb-4 px-6 py-3 rounded-full bg-[#A78D78] text-lg font-medium focus:outline-none' 
        type="text" 
        placeholder='Role/Position'/>

        <input 
        value={userImg}
        onChange={(e)=>{
          setUserImg(e.target.value);          
        }}
        className='w-full mb-4 px-6 py-3 rounded-full bg-[#A78D78] text-lg font-medium focus:outline-none' 
        type="text" 
        placeholder='Image URL'/>

        <button className='w-full py-3 rounded-full bg-[#291C0E] hover:bg-[#6E473B] font-semibold tracking-wide active:scale-95 transition'>
          ADD CONTACT
        </button>
      </form>


      <div className="flex flex-wrap gap-6">
        {allUser.map((elem, idx) => (
          <Card
            key={idx}
            elem={elem}
            idx={idx}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>

    </div>
  )
}

export default App
