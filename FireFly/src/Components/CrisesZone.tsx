import React from 'react'
import zone2 from '../assets/glare-cloud-operation-storage-and-communication-technology-data-exchange-3 1.svg'
import maze2 from '../assets/Group 3 (1).svg'
const CrisesZone = () => {
  return (
    <div className='flex justify-around'>
    <div>
        <img src={zone2} alt="" />
    </div>

<div className='pt-48'>
<div className='relative'>
        <p className='text-center text-[#FFBE00] text-[30px]'>Crises zone</p>
        <p className='text-[30px] text-white'>Navigate through world <br /> crises and see how you <br /> can help .</p>
        <img src={maze2} alt="" className='absolute top-[-20px] left-[-70px]' />
    </div> 
</div>
    

</div>
  )
}

export default CrisesZone