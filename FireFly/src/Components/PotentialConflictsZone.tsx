import React from 'react'
import zone1 from '../assets/glare-earth-globe-with-orbits 1.svg'
import maze1 from '../assets/Group 4.svg'
const PotentialConflictsZone = () => {
  return (
    <div className='flex justify-around'>
   

<div className='pt-48 pl-[150px]'>
<div className='relative'>
        <p className='text-center text-[#FFBE00] text-[30px]'>Potential conflicts zone</p>
        <p className='text-[30px] text-white'>Discover emerging conflicts as they <br /> arise through our AI model .</p>
        <img src={maze1} alt="" className='absolute top-[-20px] left-[-70px]' />
    </div> 
</div>

     <div>
        <img src={zone1} alt="" />
    </div>

</div>
  )
}

export default PotentialConflictsZone