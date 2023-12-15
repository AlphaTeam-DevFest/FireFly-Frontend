import React, { useState } from 'react';
import '../css/SidePage.css'; // Import your CSS file
import pal from '../assets/Mask group (3).svg'
import { IoPlayBackOutline } from "react-icons/io5";

const SidePage = () => {
  const [isSidePageVisible, setIsSidePageVisible] = useState(false);

  const showSidePage = () => {
    setIsSidePageVisible(true);
  };

  const hideSidePage = () => {
    setIsSidePageVisible(false);
  };

  return (
    <div className='flex justify-center'>
      <div className='flex items-center justify-center'>
        <button className='w-[200px] h-[200px] bg-red-600' onClick={showSidePage}>
          Show Side Page
        </button>
      </div>

      <div className={`side-page ${isSidePageVisible ? 'visible' : ''}` }>
      <IoPlayBackOutline size={30} onClick={hideSidePage} className='cursor-pointer ml-[550px]'/>
      
        <div className='flex'>
          <img src={pal} alt="" className='w-[220px] h-[220px]' />
          <h1 className=' text-3xl font-semibold pt-[100px] pl-[30px]'>Palestine</h1>
        </div>
        <h1 className='pt-[40px] text-center text-2xl font-semibold'>summary </h1>
        <p className='text-center px-2 font-medium mt-4'>This an example subtitle, this subtitle is nonsense. This an example subtitle, this subtitle is nonsense.This an example subtitle, this subtitle is nonsense. This an example subtitle, this subtitle is nonsense.</p>
        <h1 className='pt-[40px] text-center text-2xl font-semibold'>Links for more info</h1>
        <p className='text-center px-2 font-medium mt-6'>This an example subtitle, this subtitle is nonsense. This an example subtitle, this subtitle is nonsense.This an example subtitle, this subtitle is nonsense. This an example subtitle, this subtitle is nonsense.</p>
        <div className='flex justify-center'>
        <button className='bg-[#EE2A35] p-2 w-[200px] mt-5 text-white font-medium'>Donate</button>
        </div>
        
       </div>
    </div>
  );
};

export default SidePage;
