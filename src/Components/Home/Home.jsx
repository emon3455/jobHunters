import React from 'react';
import Banner from './Banner';
import Catagory from './Catagory';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const catagorys = useLoaderData(); 

    return (
        <main>
            <Banner></Banner>
            <Catagory catagorys ={catagorys}></Catagory>
        </main>
    );
};

export default Home;