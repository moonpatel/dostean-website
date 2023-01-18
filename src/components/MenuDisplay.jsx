/** @format */

import React from 'react'

const MenuDisplay = () => {
    return (
        <div className='grid grid-cols-1 my-3 md:grid-cols-2 gap-2 lg:grid-cols-3'>
            <div className='flex h-52 relative'>
                <div className='w-1/2 col-span-1 h-full overflow-hidden'>


                    <div className='h-full w-full bg-cover bg-center bg-[url("../src/components/images/sp1.jpg")] hover:scale-125  transition-all duration-500'></div>
                </div>
                <div className='w-1/2 bg-black h-full p-3 text-left'>
                    <h1 className='fontmerienda font-bold text-lg my-2 text-white'>
                        Mexican Sizzler
                    </h1>
                    <div className='text-gray-500 text-sm mb-5'>
                        Mexican rice served with curry, patty, sautéed veg and fries
                    </div>
                    <div className='text-2xl text-yellow-500 font-bold mb-0 absolute bottom-2'>₹499</div>
                </div>
            </div>
            <div className='flex flex-row-reverse md:flex-row h-52 relative'>
                <div className='w-1/2 col-span-1 h-full overflow-hidden'>
                    <div className='w-full h-full bg-cover bg-center bg-[url("../src/components/images/sp2.jpg")] hover:scale-125  transition-all duration-500'></div>
                </div>
                <div className='w-1/2 col-span-1 bg-black h-full p-3 text-left'>
                    <h1 className='fontmerienda font-bold text-lg my-2 text-white'>
                        Hot Chocolate
                    </h1>
                    <div className='text-gray-500 text-sm mb-5'>
                        Hot Chocolate with Biscuit Cup
                    </div>
                    <div className='text-2xl text-yellow-500 font-bold mb-0 absolute bottom-2'>₹60</div>
                </div>
            </div>
            <div className='flex md:flex-row-reverse lg:flex-row h-52 relative'>
                <div className='w-1/2 col-span-1 h-full overflow-hidden'>


                    <div className='lh-full w flw-full-span-1 h-full bg-cover bg-center bg-[url("../src/components/images/sp3.jpg")] hover:scale-125  transition-all duration-500'></div>
                </div>
                <div className='w-1/2 col-span-1 bg-black h-full p-3 text-left'>
                    <h1 className='fontmerienda font-bold text-lg my-2 text-white'>
                        Burger
                    </h1>
                    <div className='text-gray-500 text-sm mb-5'>
                        Lorem commodi consequuntur nisi facilis, quo recusandae vero
                        perferendis officia!
                    </div>
                    <div className='text-2xl text-yellow-500 font-bold mb-0 absolute bottom-2'>₹100</div>
                </div>
            </div>
            <div className='flex flex-row-reverse h-52 relative'>
                <div className='w-1/2 col-span-1 h-full overflow-hidden'>


                    <div className='lh-full w flw-full-span-1 h-full bg-cover bg-center bg-[url("../src/components/images/sp4.jpg")] hover:scale-125  transition-all duration-500'></div>
                </div>
                <div className='w-1/2 col-span-1 bg-black h-full p-3 text-left'>
                    <h1 className='fontmerienda font-bold text-lg my-2 text-white'>
                        Jeera Rice
                    </h1>
                    <div className='text-gray-500 text-sm mb-5'>
                        Hot aromatic rice with cumin tadka
                    </div>
                    <div className='text-2xl text-yellow-500 font-bold mb-0 absolute bottom-2'>₹99</div>
                </div>
            </div>
            <div className='flex lg:flex-row-reverse h-52 relative'>
                <div className='w-1/2 col-span-1 h-full overflow-hidden'>


                    <div className='lh-full w flw-full-span-1 h-full bg-cover bg-center bg-[url("../src/components/images/sp5.jpg")] hover:scale-125  transition-all duration-500'></div>
                </div>
                <div className='w-1/2 col-span-1 bg-black h-full p-3 text-left'>
                    <h1 className='fontmerienda font-bold text-lg my-2 text-white'>
                        Plain-chatpata peri peri
                    </h1>
                    <div className='text-gray-500 text-sm mb-5'>
                        Fries with the choice of flavor
                    </div>
                    <div className='text-2xl text-yellow-500 font-bold mb-0 absolute bottom-2'>₹129</div>
                </div>
            </div>
            <div className='flex flex-row-reverse md:flex-row lg:flex-row-reverse h-52 relative'>
                <div className='w-1/2 col-span-1 h-full overflow-hidden'>


                    <div className='lh-full w flw-full-span-1 h-full bg-cover bg-center bg-[url("../src/components/images/sp6.jpg")] hover:scale-125  transition-all duration-500'></div>
                </div>
                <div className='w-1/2 col-span-1 bg-black h-full p-3 text-left'>
                    <h1 className='fontmerienda font-bold text-lg my-2 text-white'>
                        Hakka Noodles
                    </h1>
                    <div className='text-gray-500 text-sm mb-5'>
                        Hakka noodles are Indian-Chinese style noodles made with unleavened
                        refined wheat flour.
                    </div>
                    <div className='text-2xl text-yellow-500 font-bold mb-0 absolute bottom-2'>₹169</div>
                </div>
            </div>
        </div>
    )
}

export default MenuDisplay
