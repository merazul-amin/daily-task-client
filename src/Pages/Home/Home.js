import React from 'react';
import HomeAddTask from './HomeAddTask/HomeAddTask';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <HomeAddTask></HomeAddTask>
        </div>
    );
};

export default Home;