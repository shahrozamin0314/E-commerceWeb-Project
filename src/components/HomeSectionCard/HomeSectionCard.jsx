import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 ' >
        <div className='h-[13rem] w-[10rem] '>
            <img className='object-cover object-top h-full w-full' src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70' alt='white-shirt' />
        </div>
        <div className='p-4' >
            <h3 className='text-lg font-medium text-gray-900' >ALY JOHN</h3>
            <p className='mt-2 text-sm text-gray-500'>MEN SOLID PURE COTTON</p>
        </div>
    </div>
  )
}

export default HomeSectionCard