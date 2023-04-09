import React, { useContext } from 'react';
import { JobContext } from '../Layout/Layout';

const FeachersJob = () => {

    const job = useContext(JobContext);
    


    return (
        <section className='my-10'>
 
            <div className="text-center mt-6 mb-10 space-y-2">
                <h2 className='text-4xl font-bold'>Featured Jobs</h2>
                <p className='text-xl text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="">
                
            </div>

        </section>
    );
};

export default FeachersJob;