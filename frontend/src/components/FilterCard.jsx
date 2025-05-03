import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const fitlerData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        filterType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
];

const FilterCard = () => {
    const [selectedFilters, setSelectedFilters] = useState({
        location: '',
        industry: '',
        salary: ''
    });

    const dispatch = useDispatch();

    const changeHandler = (filterType, value) => {
        setSelectedFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    const clearFilters = () => {
        setSelectedFilters({
            location: '',
            industry: '',
            salary: ''
        });
    };

    useEffect(() => {
        // Dispatch the selected filters as a query to fetch filtered jobs
        const searchQuery = Object.values(selectedFilters).filter(val => val).join(' ');
        dispatch(setSearchedQuery(searchQuery));
    }, [selectedFilters, dispatch]);

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup>
                {
                    fitlerData.map((data, index) => (
                        <div key={data.filterType}> {/* ✅ Unique key for each filter group */}
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item, idx) => {
                                    const itemId = `id${index}-${idx}`;
                                    return (
                                        <div className='flex items-center space-x-2 my-2' key={itemId}> {/* ✅ Unique key for each item */}
                                            <RadioGroupItem 
                                                value={item} 
                                                id={itemId} 
                                                checked={selectedFilters[data.filterType] === item}
                                                onChange={() => changeHandler(data.filterType, item)} 
                                            />
                                            <Label htmlFor={itemId}>{item}</Label>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
            {/* Clear Filters Button */}
            <div className='mt-3'>
                <button 
                    onClick={clearFilters} 
                    className="text-red-500 underline"
                >
                    Clear Filters
                </button>
            </div>
        </div>
    );
};

export default FilterCard;
