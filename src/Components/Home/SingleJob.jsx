import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleJob = () => {
    const jobID = useLoaderData()
    console.log(jobID);
    return (
        <div>
            <h2 className='text-4xl text-center font-bold my-10'>Job Details</h2>
            <p>

            </p>
        </div>
    );
};

export default SingleJob;