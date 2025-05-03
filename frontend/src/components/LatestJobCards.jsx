import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer hover:shadow-2xl transition-all'>
            <section>
                <h1 className='font-medium text-lg'>{job?.company?.name || 'Company Name Not Available'}</h1>
                <p className='text-sm text-gray-500'>{job?.location || 'Location Not Provided'}</p>
            </section>
            <section className='my-3'>
                <h1 className='font-bold text-lg'>{job?.title || 'Job Title Not Available'}</h1>
                <p className='text-sm text-gray-600'>{job?.description || 'No description provided for this job.'}</p>
            </section>
            <section className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position || 'N/A'} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType || 'N/A'}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary ? `${job.salary} LPA` : 'Salary Not Provided'}</Badge>
            </section>
        </div>
    )
}

export default LatestJobCards;
