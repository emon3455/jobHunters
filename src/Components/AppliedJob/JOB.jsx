import React from 'react';
import { Link } from 'react-router-dom';

const JOB = ({job}) => {

    const {job_id,company_logo,company_name,job_title,company_location,salary_range,job_time,job_type} = job;

    return (
        <div className='w-3/4 mx-auto flex items-center gap-10 p-4 bg-slate-50 rounded-lg border border-gray-200'>
            
            <div className="w-1/4">
                <img className='w-full' src={company_logo} alt="" />
            </div>

            <div className="w-3/4 flex justify-between items-center">

                <div className="space-y-2">
                    <h3 className='text-2xl font-bold text-gray-700'>{job_title}</h3>
                    <p className='text-gray-500'>{company_name}</p>
                    <div className="flex gap-4">
                        <p className='btn-secondary'>{job_type}</p>
                        <p className='btn-secondary'>{job_time}</p>
                    </div>
                    <div className="flex gap-7 text-gray-600">
                        <p > <i className="fa-solid fa-regular fa-location-dot"></i> {company_location} </p>
                        <p> $ Salary : {salary_range} </p>
                    </div>
                </div>
                <div className="">
                    <span className='btn-primary mt-2 inline-block'><Link to={`/${job_id}`}>View Details</Link></span>
                </div>

            </div>

        </div>
    );
};

export default JOB;