import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 

const LatestJobs = () => {
    const { allJobs, isLoading } = useSelector(store => store.job); // Assuming isLoading is part of your state
    
    // Handle when no jobs are available or when still loading
    if (isLoading) {
        return <div className="text-center text-xl">Loading...</div>;
    }

    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
            <div className={`grid gap-4 my-5 ${allJobs.length <= 3 ? 'grid-cols-1' : allJobs.length <= 6 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                {
                    allJobs.length <= 0 ? (
                        <div className="col-span-full text-center text-xl font-semibold text-gray-500">No Jobs Available</div>
                    ) : (
                        allJobs.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
                    )
                }
            </div>
        </div>
    )
}

export default LatestJobs;
