import React from 'react'

const Dishes = ({ dishes, name }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto gap-3'>
            {dishes.map(({ name, desc, price }) => {
                return <div className='flex justify-between p-2 bg-yellow-400 m-2 w-full h-20 group shadow-lg col-span-2 md:col-span-1 relative transition-all duration-500'>
                    <div className='absolute top-2 right-2 md:top-px md:right-px bg-dark h-full w-full -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-200'></div>
                    <div className='flex flex-col'>
                        <span className='fontmerienda font-bold text-lg mb-1'>{name}</span>
                        <span className='text-gray-700 text-xs italic font-medium'>{desc}</span>
                    </div>
                    <div className='mb-0 font-bold text-red-600'>₹{price}</div>
                </div>
            })}
        </div>
       
    )
}

export default Dishes