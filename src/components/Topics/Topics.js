import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopics from './SingleTopics/SingleTopics';
import './Topics.css';

const Topics = () => {
    const catagories = useLoaderData();
    const data = catagories.data;

    return (
        <div className='container' data-aos="fade-up-left" data-aos-duration="1500">
            <h1 className='text-center mt-3 mb-1 topics-headline'>Choose The <br /> Quiz Subject</h1>
            <div className='topics-container' data-aos="fade-up-left" data-aos-duration="1500">
                {data.map(catagories => <SingleTopics
                    key={catagories.id}
                    catagories={catagories}
                ></SingleTopics>)}
            </div>
        </div>
    );
};

export default Topics;