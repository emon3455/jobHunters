import React, { useContext } from 'react';
import Banner from './Banner';
import Catagory from './Catagory';
import { useLoaderData } from 'react-router-dom';
import { CatagorysContext } from '../Layout/Layout';
import FeachersJob from './FeachersJob';
const Home = () => {

    return (
        <main>
            <Banner></Banner>
            <Catagory></Catagory>
            <FeachersJob></FeachersJob>
            
        </main>
    );
};

export default Home;