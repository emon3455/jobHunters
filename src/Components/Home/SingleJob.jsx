import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleJob = () => {
    const job = useLoaderData()
    
    const {job_id,company_logo,company_name,job_title,company_location,salary_range,job_time,job_type,phone,email,address,experience,educational_requirements,job_responsibilities,job_description} = job;

    return (
        <div>
            <h2 className='text-4xl text-center font-bold my-10'>Job Details</h2>
            <div className="flex flex-col md:flex-row  justify-center items-center gap-20 ">

                <div className="text-xl text-gray-800 w-full md:w-2/4 lg:2/3 space-y-6">
                    <p><span className='font-bold'>Job Description: </span> {job_description} </p>
                    <p><span className='font-bold'>Job Responsivilitys: </span> {job_responsibilities} </p>
                    <div className="">
                        <p className='font-semibold'>Educational Requirements: </p>
                        <p>{educational_requirements}</p>
                    </div>
                    <div className="">
                        <p className='font-semibold'>Experience: </p>
                        <p>{experience}</p>
                    </div>
                </div>

                <div className=" w-full md:2/4 lg:w-1/3  rounded-xl space-y-4">
                    <div className="bg-violet-50 p-4 rounded-lg">
                        <h2 className='text-2xl font-semibold mb-6'>Job Details <hr /></h2>
                        
                        <div className="text-xl text-gray-800">
                            <p className='space-x-2'>
                                <span className='text-xl text-violet-400'>$</span> <span className='font-bold'>Salary</span> : {salary_range}(Per Month)
                            </p>
                            <p className='space-x-2'>
                                <i className="fa-solid fa-calendar-days text-violet-400"></i>
                                <span className='font-bold'>Job Title</span> : {job_title}
                            </p>
                        </div>

                        <h2 className='text-2xl font-semibold my-6'>Contact Information <hr /></h2>
                        
                        <div className="text-xl text-gray-800">
                            <p className='space-x-2'>
                                <i className="fa-solid fa-phone text-violet-400"></i>
                                <span className='font-bold'>phone</span> : {phone}
                            </p>
                            <p className='space-x-2'>
                                <i className="fa-solid fa-message text-violet-400"></i>
                                <span className='font-bold'>phone</span> : {email}
                            </p>
                            <p className='space-x-2'>
                                <i className="fa-solid fa-location-dot text-violet-400"></i>
                                <span className='font-bold'>Location</span> : {address}
                            </p>
                        </div>

                    </div>
                    <button className='btn-primary w-full'>Apply Now</button>
                </div>


            </div>
        </div>
    );
};

export default SingleJob;