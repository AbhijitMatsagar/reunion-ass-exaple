import React, { useState } from 'react'

const FilterBar = ({ properties, onFilter }) => {
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [moveInDate, setMoveInDate] = useState('');
    const [propertyType, setPropertyType] = useState('');

    const handleFilter = () => {
        const filterData = properties.filter(el => {
            return (
                (location === '' || el.location === location) &&
                (price === '' ||
                    (price === '0-1000' && el.price <= 1000) ||
                    (price === '1001-2000' && el.price > 1000 && el.price <= 2000) ||
                    (price === '2001-3000' && el.price > 2000 && el.price <= 3000) ||
                    (price === '3001+' && el.price > 3000)) &&
                (moveInDate === '' || el.moveInDate === moveInDate) &&
                (propertyType === '' || el.propertyType === propertyType)
            );
        });
        console.log(filterData);
        onFilter(filterData);
    };
    return (
        <div className='lg:flex lg:items-center lg:justify-between lg:border lg:rounded-sm lg:my-6'>
            <div className='flex flex-row items-center justify-between py-2 lg:flex-col lg:justify-start lg:items-start xl:px-16 lg:px-7'>
                <label htmlFor="Location" className='font-semibold text-[#bababa]'>Location</label>
                <select value={location} onChange={e => setLocation(e.target.value)} className='font-semibold text-violet-700'>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Hyderabad">Delhi</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Banglore">Pune</option>
                    <option value="Banglore">Kolkata</option>
                    <option value="Banglore">Lucknow</option>
                    <option value="Banglore">Hyderabad</option>
                    <option value="Banglore">Nashik</option>
                    <option value="Banglore">Noida</option>
                    <option value="Banglore">Nagpur</option>
                    {/* Add location options */}
                </select>
            </div>
            <div className='lg:border-l-2 lg:h-10'></div>
            <div className='flex flex-row items-center justify-between py-2 lg:flex-col lg:justify-start lg:items-start xl:px-16 lg:px-7'>
                <label htmlFor="MoveInDate" className='font-semibold text-[#bababa]'>When</label>
                <input type="date" value={moveInDate} onChange={e => setMoveInDate(e.target.value)} className='font-semibold text-violet-700' />
            </div>
            <div className='lg:border-l-2 lg:h-10'></div>
            <div className='flex flex-row items-center justify-between py-2 lg:flex-col lg:justify-start lg:items-start xl:px-16 lg:px-7'>
                <label htmlFor="Price" className='font-semibold text-[#bababa]'>Price Range</label>
                <select value={price} onChange={e => setPrice(e.target.value)} className='font-semibold text-violet-700'>
                    <option value="0-1000">$0 - $1000</option>
                    <option value="1001-2000">$1001 - $2000</option>
                    <option value="2001-3000">$2001 - $3000</option>
                    <option value="3001">$3001 and above</option>
                </select>
            </div>
            <div className='lg:border-l-2 lg:h-10'></div>
            <div className='flex flex-row items-center justify-between py-2 lg:flex-col lg:justify-start lg:items-start xl:px-16 lg:px-7'>
                <label htmlFor="Property Type" className='font-semibold text-[#bababa]'>Property Type</label>
                <select value={propertyType} onChange={e => setPropertyType(e.target.value)} className='font-semibold text-violet-700'>
                    <option value="Home">House</option>
                    <option value="Apartment">Apartment</option>
                    {/* Add more property type options */}
                </select>
            </div>
            <div className='lg:border-l-2 lg:h-10'></div>
            <div className='flex flex-row items-center justify-center'>
                <button onClick={handleFilter} className=' bg-violet-700 text-white rounded-lg px-4 py-2 my-2 xl:mx-16 lg:mx-7'>Apply filter</button>
            </div>
        </div>
    )
}

export default FilterBar
