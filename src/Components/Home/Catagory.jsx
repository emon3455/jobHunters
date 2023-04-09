import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CatagorysContext } from '../Layout/Layout';

const Catagory = () => {

    const catagorys = useContext(CatagorysContext)

    return (
        <section className='my-10'>

            <div className="text-center mt-6 mb-10 space-y-2">
                <h2 className='text-4xl font-bold'>Job Category List</h2>
                <p className='text-xl text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {
                    catagorys.map((catagory,indx)=> 
                    <div key={indx} className='bg-violet-100 p-8 rounded-lg space-y-2'>
                        <img className='w-10 h-10' src={catagory.logo} alt="" />
                        <h3 className='text-xl font-semibold'>{catagory.category}</h3>
                        <p className='text-gray-500'> <span className='font-medium text-lg'>{catagory.total_jobs} </span>Jobs Available</p>
                    </div>)
                }
            </div>

        </section>
    );
};

export default Catagory;