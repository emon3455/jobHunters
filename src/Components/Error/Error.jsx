import React from 'react';
import Lottie from "lottie-react";
import errors from "../../assets/error.json"
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {

    const { error, status } = useRouteError()

    // return (
    //     <div className='h-screen flex flex-col justify-center items-center'>
    //         <div className="h-3/4">
    //             <Lottie className='w-full h-full' animationData={errors} loop={true}></Lottie>
    //         </div>
    //     </div>
    // );

    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
                        <Lottie className='w-full h-full' animationData={errors} loop={true}></Lottie>
                        <span className='sr-only'>Error</span> {status || ""}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='px-8 py-3 font-semibold rounded-lg bg-sky-300 text-white'>
                        Back to homepage
                    </Link>
                </div>
            </div>
      </section>
    );
    
};

export default Error;