import React from 'react'
import { Codepen } from 'lucide-react';

const Card = ({item}) => {
  
  const {charge,profilePic,name,profession,category,tags, info,isAvailable} = item
  return (
    <div className='card'>
       <div className="header">
       {isAvailable&& <span id='avail'>avaliable</span>}
        <span id='charge-money'>{charge}</span>
       </div>
       <div className='profile-holder'>
       <img src={profilePic} alt="" />  

       </div>
       <div className='information-holder'>
        <span>{name}</span>
        <span>{profession}</span>
        <span> <Codepen size={20} color={"green"} /> {category}</span>
       </div>
       <div className='tags'>
     
         {tags.map((item,index)=><span key={index}>{item}</span>)}
   
       </div>
       <span>
        {info}
       </span>
       <div className="footer">
        <span>VIEW PROFILE</span>
       </div>
    </div>
  )
}

export default Card