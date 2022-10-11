import React from 'react';

const QuizArea = ({ qu }) => {
    console.log(qu)
    const { question, correctAnswer, id, options } = qu
    return (
        <div>
            <h1>{question}</h1>
            <p>{options[0]}</p>
            <p>{options[1]}</p>
            <p>{options[2]}</p>
            <p>{options[3]}</p>
            <div>The Correct Answer is <span className='text-primary'>{correctAnswer}</span></div>
        </div>
    );
};

export default QuizArea;