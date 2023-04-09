import React from 'react';

const Banner = () => {
    return (
        <section className="banner-container">
            <div className="md:w-2/3 space-y-4">
                <h2 className='text-7xl font-semibold'>
                    Get One Step Closer To Your <span className='text-violet-600'>Dream Job</span>
                </h2>

                <p className='text-gray-500'>
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>

                <button className='btn-primary'>Get Started</button>

            </div>
            <div className="banner-img">
                <img className='w-full' src="https://github.com/emon3455/demo-picture/blob/main/assets/All%20Images/P3OLGJ1%20copy%201.png?raw=true" alt="" />
            </div>     
        </section>
    );
};

export default Banner;