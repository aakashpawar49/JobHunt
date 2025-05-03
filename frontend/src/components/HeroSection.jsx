import React, { useState, useCallback } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash'; // Import lodash for debouncing

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Debounced search function
    const searchJobHandler = useCallback(
        debounce(() => {
            if (query.trim()) {
                dispatch(setSearchedQuery(query));
                navigate("/browse");
            }
        }, 500), [query]
    );

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        searchJobHandler(); // Trigger debounced search
    };

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        value={query}
                        onChange={handleChange}
                        className='outline-none border-none w-full'
                        aria-label="Search for jobs"
                    />
                    <Button 
                        onClick={() => { 
                            if (query.trim()) {
                                dispatch(setSearchedQuery(query));
                                navigate("/browse");
                            }
                        }} 
                        className="rounded-r-full bg-[#6A38C2]"
                        aria-label="Search"
                    >
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
