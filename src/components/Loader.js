import React from 'react'
import "./Loader.css";

 const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-2 min-h-[50vh]'>
        <div className='loader'></div>
        <p className='text-lg font-semibold text-[#22223b]'>Loading...</p>
    </div>
  )
}

export default Loader;
