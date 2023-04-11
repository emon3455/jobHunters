import React from 'react';
import Lottie from "lottie-react";
import error from "../../assets/error.json"

const Error = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <div className="h-3/4">
                <Lottie className='w-full h-full' animationData={error} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Error;