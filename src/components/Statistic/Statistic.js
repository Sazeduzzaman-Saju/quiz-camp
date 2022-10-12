import React from 'react';
import DataChart from './DataChart/DataChart';
import { useLoaderData } from 'react-router-dom';

const Statistic = () => {
    const ChartData = useLoaderData();
    return (
        <div className='container'>
            <div data-aos="fade-up-left" data-aos-duration="1500">
                <h1 className='text-center mt-5'>Quiz Info</h1>
                <h1 className='text-center mb-5 topics-headline'>Quiz Subject And <br />Total Quiz</h1>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="1000">
                <DataChart key={ChartData.id} ChartData={ChartData}></DataChart>
            </div>
        </div>
    );
};

export default Statistic;