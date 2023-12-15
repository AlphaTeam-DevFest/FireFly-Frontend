import React from 'react'
import logo from '../assets/Asset 4_1 1.svg'
import fly from '../assets/Asset 6 1.svg'
const Head = () => {
  return (
    <div className='pt-[100px] '>
  <div className='flex justify-center '>
    <img src={logo} alt="" />
  </div>
  <div className='text-center'>
    <p className='text-[#FFBE00] text-[40px] pt-[78px] font-[600]'>Navigate the world through it's conflicts</p>
  </div>

  <div className='text-center px-[300px]'>
  <p className='text-[30px] pt-[78px] font-[600] width-[100px] text-white'><span className='text-[#FFBE00]'>FIREFLY </span>is your global peace dashboard. It shows where the world needs help, predicts future issues, and connects you to events where you can make a positive impact. It's not just an app; it's a tool for everyone to contribute to a more peaceful world.</p>
  </div>

  <div className='flex justify-center mt-5'>
    <img src={fly} alt="" />
  </div>
    </div>
  )
}

export default Head