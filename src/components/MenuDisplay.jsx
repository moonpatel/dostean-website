import React from 'react'

const MenuDisplay = () => {
    return (
        <div className='grid grid-cols-1 my-3 md:grid-cols-2 gap-1 lg:grid-cols-3'>
            <div className='flex h-64 relative'>
                <div className='w-1/2 col-span-1 h-full overflow-hidden'>
                    <div className='h-full w-full bg-cover bg-center bg-[url("../src/components/images/sp1.jpg")] hover:scale-125  transition-all duration-500'></div>
                </div>
                <div className='w-1/2 bg-black h-full px-5 text-left py-8'>
                    <h1 className='fontmerienda font-bold text-lg my-2 text-white'>
                        Hot Chocolate with Biscuit Cup
                    </h1>
                    <div className='text-gray-500 text-sm mb-5'>
                    </div>
                    <div className='text-2xl text-yellow-500 font-bold mb-0 absolute bottom-6'>₹499</div>
                </div>
            </div>
            <div className='flex flex-row-reverse md:flex-row h-64 relative'>
                <div className='w-1/2 col-span-1 h-full overflow-hidden'>
                    <div className='h-full w-full bg-cover bg-center bg-[url("../src/components/images/sp2.jpg")] hover:scale-125  transition-all duration-500'></div>
                </div>
                <div className='w-1/2 col-span-1 bg-black h-full px-5 text-left py-8'>
                    <h1 className='fontmerienda font-bold text-lg my-2 text-white'>
                        Sukun wali chai
                    </h1>
                    <div className='text-gray-500 text-sm mb-5'>
                    </div>
                    <div className='text-2xl text-yellow-500 font-bold mb-0 absolute bottom-6'>₹60</div>
                </div>
            </div>
            <div className='flex md:flex-row-reverse lg:flex-row h-64 relative'>
                <div className='w-1/2 col-span-1 h-full overflow-hidden'>
                    <div className='h-full w-full-span-1 bg-cover bg-center bg-[url("../src/components/images/sp3.jpg")] hover:scale-125  transition-all duration-500'></div>
                </div>
                <div className='w-1/2 col-span-1 bg-black h-full px-5 text-left py-8'>
                    <h1 className='fontmerienda font-bold text-lg my-2 text-white'>
                        Green Manchurian
                    </h1>
                    <div className='text-gray-500 text-sm mb-5'>
                        Vegetable balls toasted with cheese spinach
                    </div>
                    <div className='text-2xl text-yellow-500 font-bold mb-0 absolute bottom-6'>₹100</div>
                </div>
            </div>
            <div className='flex flex-row-reverse h-64 relative'>
                <div className='w-1/2 col-span-1 h-full overflow-hidden'>
                    <div className='h-full w-full-span-1 bg-cover bg-center bg-[url("../src/components/images/sp4.jpg")] hover:scale-125  transition-all duration-500'></div>
                </div>
                <div className='w-1/2 col-span-1 bg-black h-full px-5 text-left py-8'>
                    <h1 className='fontmerienda font-bold text-lg my-2 text-white'>
                        Pulled Cheese Garlic Bread
                    </h1>
                    <div className='text-gray-500 text-sm mb-5'>
                        House special garlic bread
                    </div>
                    <div className='text-2xl text-yellow-500 font-bold mb-0 absolute bottom-6'>₹99</div>
                </div>
            </div>
            <div className='flex lg:flex-row-reverse h-64 relative'>
                <div className='w-1/2 col-span-1 h-full overflow-hidden'>


                    <div className='w-full-span-1 h-full bg-cover bg-center bg-[url("../src/components/images/sp5.jpg")] hover:scale-125  transition-all duration-500'></div>
                </div>
                <div className='w-1/2 col-span-1 bg-black h-full px-5 text-left py-8'>
                    <h1 className='fontmerienda font-bold text-lg my-2 text-white'>
                        Cilantro Rice With Garlic Sauce
                    </h1>
                    <div className='text-gray-500 text-sm mb-5'>
                        Flavored cilantro rice served with cheese burnt garlic sauce
                    </div>
                    <div className='text-2xl text-yellow-500 font-bold mb-0 absolute bottom-6'>₹129</div>
                </div>
            </div>
            <div className='flex flex-row-reverse md:flex-row lg:flex-row-reverse h-64 relative'>
                <div className='w-1/2 col-span-1 h-full overflow-hidden'>


                    <div className='w-full-span-1 h-full bg-cover bg-center bg-[url("../src/components/images/sp6.jpg")] hover:scale-125  transition-all duration-500'></div>
                </div>
                <div className='w-1/2 col-span-1 bg-black h-full px-5 text-left py-8'>
                    <h1 className='fontmerienda font-bold text-lg my-2 text-white'>
                        Mexican Sizzler
                    </h1>
                    <div className='text-gray-500 text-sm mb-5'>
                        Mexican rice served with curry, patty, sautéed veg and fries
                    </div>
                    <div className='text-2xl text-yellow-500 font-bold mb-0 absolute bottom-6'>₹169</div>
                </div>
            </div>
        </div>
    )
}

export default MenuDisplay
