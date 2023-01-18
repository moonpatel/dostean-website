/** @format */

import React from 'react'

const MenuDisplay = () => {
  return (
    <div className='grid grid-cols-1 my-3 md:grid-cols-2 lg:grid-cols-3'>
      <div className='flex h-52'>
        <div className='h-full w-1/2 bg-cover bg-center bg-[url("../src/components/images/sp1.jpg")]'></div>
        <div className='w-1/2 bg-dark h-full p-3 text-left'>
          <h1 className='fontmerienda font-bold text-2xl my-2 text-white'>
            Hot Chocolate with Biscuit Cup
          </h1>
          <div className='text-gray-500 text-sm mb-5'></div>
          <div className='text-2xl text-primary-200 font-bold mb-0'>₹60</div>
        </div>
      </div>
      <div className='flex flex-row-reverse md:flex-row h-52'>
        <div className='w-1/2 col-span-1 h-full bg-cover bg-center bg-[url("../src/components/images/sp2.jpg")]'></div>
        <div className='w-1/2 col-span-1 bg-dark h-full p-3 text-left'>
          <h1 className='fontmerienda font-bold text-2xl my-2 text-white'>
            Sukun wali chai
          </h1>
          <div className='text-gray-500 text-sm mb-5'></div>
          <div className='text-2xl text-primary-200 font-bold mb-0'>₹45</div>
        </div>
      </div>
      <div className='flex md:flex-row-reverse lg:flex-row h-52'>
        <div className='w-1/2 col-span-1 h-full bg-cover bg-center bg-[url("../src/components/images/sp3.jpg")]'></div>
        <div className='w-1/2 col-span-1 bg-dark h-full p-3 text-left'>
          <h1 className='fontmerienda font-bold text-2xl my-2 text-white'>
            Green Manchurian
          </h1>
          <div className='text-gray-500 text-sm mb-5'>
            Vegetable balls toasted with cheese spinach
          </div>
          <div className='text-2xl text-primary-200 font-bold mb-0'>₹189</div>
        </div>
      </div>
      <div className='flex flex-row-reverse h-52'>
        <div className='w-1/2 col-span-1 h-full bg-cover bg-center bg-[url("../src/components/images/sp4.jpg")]'></div>
        <div className='w-1/2 col-span-1 bg-dark h-full p-3 text-left'>
          <h1 className='fontmerienda font-bold text-2xl my-2 text-white'>
            Pulled Cheese Garlic Bread
          </h1>
          <div className='text-gray-500 text-sm mb-5'>
            House special garlic bread
          </div>
          <div className='text-2xl text-primary-200 font-bold mb-0'>₹209</div>
        </div>
      </div>
      <div className='flex lg:flex-row-reverse h-52'>
        <div className='w-1/2 col-span-1 h-full bg-cover bg-center bg-[url("../src/components/images/sp5.jpg")]'></div>
        <div className='w-1/2 col-span-1 bg-dark h-full p-3 text-left'>
          <h1 className='fontmerienda font-bold text-2xl my-2 text-white'>
            Cilantro Rice With Garlic Sauce
          </h1>
          <div className='text-gray-500 text-sm mb-5'>
            Flavored cilantro rice served with cheese burnt garlic sauce
          </div>
          <div className='text-2xl text-primary-200 font-bold mb-0'>₹249</div>
        </div>
      </div>
      <div className='flex flex-row-reverse md:flex-row lg:flex-row-reverse h-52'>
        <div className='w-1/2 col-span-1 h-full bg-cover bg-center bg-[url("../src/components/images/sp6.jpg")]'></div>
        <div className='w-1/2 col-span-1 bg-dark h-full p-3 text-left'>
          <h1 className='fontmerienda font-bold text-2xl my-2 text-white'>
            Mexican Sizzler
          </h1>
          <div className='text-gray-500 text-sm mb-5'>
            Mexican rice served with curry, patty, sautéed veg and fries
          </div>
          <div className='text-2xl text-primary-200 font-bold mb-0'>₹499</div>
        </div>
      </div>
    </div>
  )
}

export default MenuDisplay
