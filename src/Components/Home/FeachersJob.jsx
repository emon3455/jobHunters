import React, { useContext } from 'react';
import { JobContext } from '../Layout/Layout';
import JobFeacherInfo from './JobFeacherInfo';

const FeachersJob = () => {

    const jobs = useContext(JobContext);
    

    return (
        <section className='my-10'>
 
            <div className="text-center mt-6 mb-10 space-y-2">
                <h2 className='text-4xl font-bold'>Featured Jobs</h2>
                <p className='text-xl text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
                {
                    jobs.map(job=> <JobFeacherInfo key={job.job_id} job={job}></JobFeacherInfo>)
                }
            </div>

        </section>
    );
};

export default FeachersJob;