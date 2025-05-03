import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const { searchedQuery } = useSelector(store => store.job);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, { withCredentials: true });
                
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                setError('Failed to fetch jobs');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (searchedQuery) {
            fetchAllJobs();
        }
    }, [searchedQuery, dispatch]);

    return { loading, error };
};

export default useGetAllJobs;
