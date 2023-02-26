import React from 'react'
import { useStates } from '../States'

const TopResult = () => {
  const {img} = useStates();  
  return (
    <div className='text-mp-white'>
        <p className='text-xl font-alata font-semibold'>Top Result</p>
        <div className="h-60 ml-2 w-96 mt-4 rounded-2xl bg-opacity-40 bg-mp-very-light-black p-4">
              <img className='h-28 object-contain rounded-lg' src={img} alt="" />
              <p className='mt-3 ml-3 font-bold font-alata tracking-wide'>Song or PlayList Name</p>
        </div>
    </div>
  )
}

export default TopResult