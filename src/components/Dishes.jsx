import React from 'react'

const Dishes = ({ dishes, name }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto gap-3'>
            {dishes.map(({ name, desc, price }) => {
                return <div className='flex justify-between p-2 bg-gray-100 m-2 w-full h-20 shadow-md col-span-2 md:col-span-1'>
                    <div className='flex flex-col'>
                        <span className='fontmerienda font-bold text-lg mb-1'>{name}</span>
                        <span className='text-gray-500 text-xs italic font-medium'>{desc}</span>
                    </div>
                    <div className='mb-0 font-bold text-green-500'>₹{price}</div>
                </div>
            })}
        </div>
    )
}

export default Dishes