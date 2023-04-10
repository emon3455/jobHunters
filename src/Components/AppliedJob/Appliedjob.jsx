import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { JobContext } from '../Layout/Layout';
import { getShoppingCart } from '../../utils/fakedb';
import JOB from './JOB';

const Appliedjob = () => {

    const allJobs= useContext(JobContext);
    const appliedJobObject = getShoppingCart();

    const selectedJobs = [];
    const handleLoadApliedJob=()=>{
        for (const key in appliedJobObject) {
            const job = allJobs.find(jb=> jb.job_id === key);
            selectedJobs.push(job)
        }
    }
    handleLoadApliedJob();

    const [jobs , setJobs] = useState(selectedJobs);

    const handleOnsiteJob=()=>{
        setJobs(selectedJobs);
        const onsiteJob=selectedJobs.filter(jb=> jb.job_type === "Onsite")
        setJobs(onsiteJob)
    }
    const handleRemoteJob=()=>{
        setJobs(selectedJobs);
        const remoteJob=selectedJobs.filter(jb=> jb.job_type === "Remote")
        setJobs(remoteJob)
    }
    
    return (
        <div className='my-5'>

            <h2 className='text-4xl font-semibold my-10 text-center'>Applied Jobs</h2>

            <div className="text-right space-x-4 my-6">
                <button className='btn-primary' onClick={handleOnsiteJob}>Show Onsite Job</button>
                <button className='btn-primary' onClick={handleRemoteJob}>Show Remote Job</button>
            </div>

            <div className="space-y-5">
                {
                   jobs.map(job=> <JOB key={job.job_id} job={job}></JOB>) 
                }
            </div>

        </div>
    );
};

export default Appliedjob;