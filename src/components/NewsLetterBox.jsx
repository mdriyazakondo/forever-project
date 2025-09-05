import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHanldler=(e)=>{
    e.praventDefault()
  }
  return (
    <div className='text-center'>
      <p className="text-2xl font-medium text-gray-800">subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dolor odio!</p>
      <form onSubmit={onSubmitHanldler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" name="" id="" placeholder='Enter Your Email' required className='w-full sm:flex-1 outline-none'/>
        <button className='bg-black text-white text-xs py-4 px-10' type='submit'>SUBSCRIBE NOW</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
