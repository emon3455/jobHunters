import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../Layout/Layout';
import JobFeacherInfo from './JobFeacherInfo';

const FeachersJob = () => {

    const jobs = useContext(JobContext);
    const [allJobs , setAllJobs] = useState(jobs);
    
    useEffect(()=>{
        const fourJob = jobs.slice(0,4)
        setAllJobs(fourJob);
    },[])

    const handleViewAl =()=>{
        setAllJobs(jobs)
    }

    return (
        <section className='my-10'>
 
            <div className="text-center mt-6 mb-10 space-y-2">
                <h2 className='text-4xl font-bold'>Featured Jobs</h2>
                <p className='text-xl text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
                {
                    allJobs.map(jb => <JobFeacherInfo key={jb.job_id} job={jb}></JobFeacherInfo>) 
                }
                
            </div>

           <div className="my-8 text-center">
                <button onClick={handleViewAl} className={"btn-primary mx-auto"}>See ALL Jobs</button>
           </div>

        </section>
    );
};

export default FeachersJob;