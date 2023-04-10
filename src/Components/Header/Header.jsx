import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='header-container'>

            <h2 className='text-2xl font'>Job Hunters</h2>

            <div className="md:w-2/4 lg:w-1/3 flex md:justify-between md:mx-auto justify-around text-sm md:text-lg lg:text-xl">
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/appliedJob">Applied Job</ActiveLink>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/blog">Blogs</ActiveLink>
            </div>

            <div className="">
                <button className='btn-primary'>Start Applying</button>
            </div>
            
        </nav>
    );
};

export default Header;