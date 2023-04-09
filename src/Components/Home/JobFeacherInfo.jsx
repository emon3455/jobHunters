import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SingleJob from './SingleJob';

const JobFeacherInfo = ({job}) => {

    const {job_id,company_logo,company_name,job_title,company_location,salary_range,job_time,job_type} = job;

    return (
        <div className='bg-gray-50 border p-10 rounded-lg'>
            <div className="">
                <img src={company_logo} alt="" />
            </div>
            <div className="mt-5 space-y-4">
                <h3 className='text-2xl font-bold text-gray-700'>{job_title}</h3>
                <p className='text-gray-500'>{company_name}</p>
                <div className=" space-x-4">
                    <span className='btn-secondary'>{job_type}</span>
                    <span className='btn-secondary'>{job_time}</span>
                </div>
                <div className="space-x-4 text-gray-600">
                    <span > <i className="fa-solid fa-regular fa-location-dot"></i> {company_location} </span>
                    <span> $ Salary : {salary_range} </span>
                </div>

                <span className='btn-primary mt-2 inline-block'><Link to={`/${job_id}`}>View Details</Link></span>
            </div>
        </div>
    );
};

export default JobFeacherInfo;