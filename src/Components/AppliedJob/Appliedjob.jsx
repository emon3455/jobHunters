import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { JobContext } from '../Layout/Layout';
import { getShoppingCart } from '../../utils/fakedb';
import JOB from './JOB';

const Appliedjob = () => {

    const allJobs= useContext(JobContext);
    const appliedJobObject = getShoppingCart();


    const selectedJobs = []
    const handleLoadApliedJob=()=>{
        for (const key in appliedJobObject) {
            const job = allJobs.find(jb=> jb.job_id === key);
            selectedJobs.push(job)
        }
    }
    handleLoadApliedJob();
    
    return (
        <div className='my-10'>

            <div className="space-y-5">
                {
                   selectedJobs.map(job=> <JOB key={job.job_id} job={job}></JOB>) 
                }
            </div>

        </div>
    );
};

export default Appliedjob;