import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { useSelector } from 'react-redux';
// import { format } from 'date-fns'; 

const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector((store) => store.job);

    // Helper function to format date consistently
    const formatDate = (dateString) => {
        return format(new Date(dateString), 'MMM dd, yyyy'); // Format as 'Aug 15, 2025'
    };

    // Helper function to determine badge color
    const getStatusBadgeColor = (status) => {
        switch (status) {
            case 'rejected':
                return 'bg-red-400';
            case 'pending':
                return 'bg-gray-400';
            case 'accepted':
                return 'bg-green-400';
            default:
                return 'bg-gray-200';
        }
    };

    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {allAppliedJobs.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center">
                                You haven't applied to any jobs yet.
                            </TableCell>
                        </TableRow>
                    ) : (
                        allAppliedJobs.map((appliedJob) => (
                            <TableRow key={appliedJob._id}>
                                <TableCell>{formatDate(appliedJob?.createdAt)}</TableCell>
                                <TableCell>{appliedJob.job?.title}</TableCell>
                                <TableCell>{appliedJob.job?.company?.name}</TableCell>
                                <TableCell className="text-right">
                                    <Badge className={getStatusBadgeColor(appliedJob?.status)}>
                                        {appliedJob.status.toUpperCase()}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default AppliedJobTable;
