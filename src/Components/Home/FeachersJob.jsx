import React, { useContext, useState } from 'react';
import { JobContext } from '../Layout/Layout';
import JobFeacherInfo from './JobFeacherInfo';

const FeachersJob = () => {

    const jobs = useContext(JobContext);
    const [isclicked, setIsClicked] = useState(false);

    const handleViewAl =()=>{
        setIsClicked(true);
    }

    return (
        <section className='my-10'>
 
            <div className="text-center mt-6 mb-10 space-y-2">
                <h2 className='text-4xl font-bold'>Featured Jobs</h2>
                <p className='text-xl text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
                {
                isclicked 
                 ?
                 jobs.map(job=> <JobFeacherInfo key={job.job_id} job={job}></JobFeacherInfo>) 
                 : 
                 jobs.slice(1,5).map(job=> <JobFeacherInfo key={job.job_id} job={job}></JobFeacherInfo>)
                 }
            </div>

           <div className=" my-8">
                <button onClick={handleViewAl} className={`btn-primary mx-auto ${isclicked ? "hidden" : "block"}`}>See ALL Jobs</button>
           </div>

        </section>
    );
};

export default FeachersJob;