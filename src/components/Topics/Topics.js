import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopics from './SingleTopics/SingleTopics';
import './Topics.css';

const Topics = () => {
    const catagories = useLoaderData();
    const data = catagories.data;

    return (
        <div className='container'>
            <h1 className='text-center mt-5 mb-5 topics-headline'>Choose The <br />Subject Of Quiz</h1>
            <div className='topics-container'>
                {data.map(catagories => <SingleTopics
                    key={catagories.id}
                    catagories={catagories}
                ></SingleTopics>)}
            </div>
        </div>
    );
};

export default Topics;