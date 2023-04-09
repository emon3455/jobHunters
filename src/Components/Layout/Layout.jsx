import React, { createContext, useContext } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';



const Layout = () => {

    return (
        <div className='container mx-auto'>

            <Header></Header>

            <Outlet></Outlet>

            <ActiveLink></ActiveLink>
            
        </div>
    );
};

export default Layout;