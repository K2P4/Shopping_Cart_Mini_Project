import React from 'react'

const EmptyStage = () => {
  
  return (
    <div className='mt-16 mx-auto  mb-2 sm:mb-9 flex flex-col align-middle items-center'>
        <lord-icon
    src="https://cdn.lordicon.com/eiekfffz.json"
    trigger="hover"
    stroke="bold"
    style="width:250px;height:250px">
</lord-icon>
        <p className=' text-sm  select-none sm:text-md  mt-8 underline text-gray-700  '>There is no item in cart </p>

    </div>
  )
}

export default EmptyStage
