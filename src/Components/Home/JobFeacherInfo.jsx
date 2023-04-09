import React from 'react';

const JobFeacherInfo = ({job}) => {

    const {job_id,company_logo,company_name,job_title,company_location,salary_range,job_time,job_type} = job

    return (
        <div className='bg-gray-50 border p-10 rounded-lg'>
            <div className="">
                <img src={company_logo} alt="" />
            </div>
            <h3 className='text-2xl mt-5 font-bold'>{job_title}</h3>
            <p>{company_name}</p>
            <div className="">
                <span>{job_type}</span> <span>{job_time}</span>
            </div>
            <div className="space-x-4">
                <span> <i className="fa-solid fa-regular fa-location-dot"></i> {company_location} </span>
                <span> $ Salary : {salary_range} </span>
            </div>
            <button className='btn-primary mt-2'>View Details</button>
        </div>
    );
};

export default JobFeacherInfo;