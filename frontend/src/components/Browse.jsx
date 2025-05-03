import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Browse = () => {
    useGetAllJobs();
    const { allJobs, searchedQuery } = useSelector((store) => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(''));
        };
    }, [dispatch]);

    // Loading state can be added based on how useGetAllJobs is implemented
    const isLoading = allJobs === null; // Or you could add a specific loading state in the slice

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>
                    Search Results ({allJobs.length})
                </h1>

                {/* Loading State */}
                {isLoading ? (
                    <div className="text-center py-10">Loading jobs...</div>
                ) : allJobs.length === 0 ? (
                    <div className="text-center py-10">No jobs found matching "{searchedQuery}".</div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {allJobs.map((job) => (
                            <Job key={job._id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Browse;
