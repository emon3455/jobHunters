import React, { createContext } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

export const CatagorysContext = createContext([]);
export const JobContext = createContext([]);

const Layout = () => {

    const {catagoryData, jobData} = useLoaderData();

    return (
        <div className='container mx-auto'>

            <JobContext.Provider value={jobData}>
                <CatagorysContext.Provider value={catagoryData}>
                    <Header></Header>

                    <Outlet></Outlet>

                    <ActiveLink></ActiveLink>
                </CatagorysContext.Provider>
            </JobContext.Provider>  
            
        </div>
    );
};

export default Layout;