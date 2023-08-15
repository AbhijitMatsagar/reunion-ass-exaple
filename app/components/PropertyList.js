import Image from 'next/image';
import React from 'react';
import { AiOutlineHeart, AiOutlineColumnWidth } from "react-icons/ai";
import { BiBed, BiBath } from "react-icons/bi";

function PropertyList({ filteredProperties }) {
    // console.log(filteredProperties);
    return (
        <div className='px-4'>
            <div className='grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4 items-center justify-center'>
                {filteredProperties.map(property => (
                    <div key={property.id} className='cursor-pointer'>
                        <div className='border border-lg rounded-t-md rounded-b-sm'>
                            <Image src={property.img} alt="sdsd" className='rounded-t-lg' />
                            <div className='p-2 lg:px-4 lg:pb-4 lg:pt-2'>
                                <div className='flex justify-between items-center'>
                                    <h2 className='text-[25px] text-violet-700 font-semibold'>{property.price}<span className='text-[16px]'>/month</span></h2>
                                    <AiOutlineHeart className='text-[40px] text-violet-700 font-semibold border rounded-[50%] p-2' />
                                </div>
                                <h2 className='text-[22px] text-black font-semibold'>{property.name}</h2>
                                <p className='text-[16px] text-[#bababa] font-medium'>{property.address}</p>
                                <hr className='my-1'/>
                                <div className='flex justify-between items-center text-[12px] lg:text-[16px]'>
                                    <div className='flex items-center'>
                                        <BiBed className='text-violet-700 font-semibold' />
                                        <span className='text-[#8f8e8d] font-medium'>{property.beds} Beds</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <BiBath className='text-violet-700 font-semibold' />
                                        <span className='text-[#8f8e8d] font-medium'>{property.bathrooms} Bathrooms</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <AiOutlineColumnWidth className='text-violet-700 font-semibold' />
                                        <span className='text-[#8f8e8d] font-medium'>{property.area} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PropertyList;
