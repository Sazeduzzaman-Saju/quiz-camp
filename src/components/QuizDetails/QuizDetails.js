import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizArea from './QuizArea/QuizArea';

const QuizDetails = () => {
    const quiz = useLoaderData();
    console.log(quiz.data[0])
    const { data } = quiz;
    const { name, questions } = data;
    return (
        <div>
            <h1 className='text-center mt-5 mb-5 topics-headline' data-aos="fade-up-left" data-aos-duration="1500">Quiz For<br /> <strong className='text-primary'>{name}</strong> </h1>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        {questions.map(qu => <QuizArea
                            key={qu.id}
                            qu={qu}></QuizArea>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizDetails;