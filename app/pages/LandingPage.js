"use client";
import React, { useEffect, useState } from 'react'
import FilterBar from '../components/FilterBar';
import PropertyList from '../components/PropertyList';
import { mockData } from '../data/data';

const LandingPage = () => {
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [displayedProperties, setDisplayedProperties] = useState(mockData);
    // const [noDataFound, setNoDataFound] = useState(false);

    const handleFilter = filteredData => {
        setFilteredProperties(filteredData);
    };
    useEffect(() => {
        if (filteredProperties.length === 0) {
            setDisplayedProperties(mockData); // Display all data when no filters are applied
            // setNoDataFound(true); // Show "No data found" message
        } else {
            setDisplayedProperties(filteredProperties);
            // setNoDataFound(false); // Hide "No data found" message
        }
    }, [filteredProperties]);

    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-[20px] font-bold lg:text-[30px]'>Filter properties to rent</h2>
            <FilterBar properties={mockData} onFilter={handleFilter} />
            <PropertyList filteredProperties={displayedProperties} />
        </div>
    )
}

export default LandingPage
