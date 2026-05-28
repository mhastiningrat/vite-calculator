import React from 'react'

function Input({type,label}) {
  return (
    <>
        <div className='flex flex-col mt-4'>
            <label className='font-xs text-green-300'>{label}</label>
            <input type={type} className='bg-black border-2 p-2 border-green-300 rounded-lg text-white shadow-[0_0_10px_rgba(0,255,0,0.8),0_0_20px_rgba(0,255,0,0.6)]'/>
        </div>
        
    </>
  )
}

export default Input