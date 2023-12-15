import React from 'react'
import zone from '../assets/glare-space-exploration-rocket-flies-over-the-planet-2 1 (1).svg'
import maze from '../assets/Group 5 (2).svg'
const PeaceZone = () => {
  return (
    <div className='flex justify-around'>
        <div>
            <img src={zone} alt="" />
        </div>

<div className='pt-48'>
   <div className='relative'>
            <p className='text-center text-[#FFBE00] text-[30px]'>peae zone</p>
            <p className='text-[30px] text-white'>Organise and participate in <br /> events that promote world <br /> peace .</p>
            <img src={maze} alt="" className='absolute top-[-20px] left-[-70px]' />
        </div> 
</div>
        

    </div>
  )
}

export default PeaceZone