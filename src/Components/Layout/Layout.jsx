import React, { createContext, useState } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CatagorysContext = createContext([]);
export const JobContext = createContext([]);

const Layout = () => {

    const {catagoryData, jobData} = useLoaderData();

    return (
        <div className='container mx-auto p-2'>

            <JobContext.Provider value={jobData}>
                <CatagorysContext.Provider value={catagoryData}>
                    <Header></Header>

                    <Outlet></Outlet>

                    <ActiveLink></ActiveLink>
                    <ToastContainer></ToastContainer>
                </CatagorysContext.Provider>
            </JobContext.Provider>  
            
        </div>
    );
};

export default Layout;