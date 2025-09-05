import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'

const Collection = () => {
  const {products}=useContext(ShopContext)
  const [shoFilter,setShoFilter]=useState(false)
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filters options */}
      <div className='min-w-60 '>
        <p onClick={()=>setShoFilter(!shoFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${shoFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/*Category FILTERS  */}
      <div className={`border border-gray-300 pl-3 py-3 my-5 ${shoFilter ? "":"hidden"} sm:block`}>

        <p className='mb-3 text-sm font-medium'>CATEGORIS</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
           <p className='flex gap-2'>
            <input type="checkbox" name="" id="" className='w-3' value={'Men'} /> Men
           </p>
           <p className='flex gap-2'>
            <input type="checkbox" name="" id="" className='w-3' value={'Women'} /> Women
           </p>
           <p className='flex gap-2'>
            <input type="checkbox" name="" id="" className='w-3' value={'Kids'} /> Kids
           </p>
        </div>
      </div>

      {/* subCategory Filters */}
       <div className={`border border-gray-300 pl-3 py-3 mt-6 ${shoFilter ? "":"hidden"} sm:block`}>

        <p className='mb-3 text-sm font-medium'>CATEGORIS</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
           <p className='flex gap-2'>
            <input type="checkbox" name="" id="" className='w-3' value={'Topwear'} /> Topwear
           </p>
           <p className='flex gap-2'>
            <input type="checkbox" name="" id="" className='w-3' value={'Buttomwear'} /> Buttomwear
           </p>
           <p className='flex gap-2'>
            <input type="checkbox" name="" id="" className='w-3' value={'Winterwear'} /> Winterwear
           </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Collection
