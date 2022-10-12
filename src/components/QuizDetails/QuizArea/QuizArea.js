import React, { useState } from 'react';
import './QuizArea.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizArea = ({ qu, data }) => {
    console.log(qu)
    const { total, question, correctAnswer, options } = qu;

    const toastId = React.useRef(null);

    const notify = () => {
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast(correctAnswer);
        }
    }
    const [selected, setSelected] = useState()

    const handleSelected = (i) => {
        if (selected === i && selected === correctAnswer) {
            return "select";
        } else if (selected === i && selected !== correctAnswer) {
            return "wrong";
        } else if (i === correctAnswer) {
            return "select";
        }
    }
    const handleCheck = (i) => {
        setSelected(i)
    }
    return (
        <div>
            <div className="container shadow-lg quiz-area w-50 " data-aos="fade-up-left" data-aos-duration="1500">
                <div className='row'>
                    <div className='col-lg-9 text-primary'>
                    </div>
                    <div className='col-lg-3 text-end'>
                        <button onClick={notify} className='border-0 mt-2 bg-transparent text-end bg-primary'><span className=''>Ans</span><i class="fa-solid fa-eye-slash fs-5 eye-icons ms-2"></i></button>
                    </div>
                </div>
                <div className='row p-3 text-black'>
                    <div className=''>
                        <h3 className='text-primary'>{data.indexof}</h3>
                        <h5 className='text-center questions-title mb-3'>{question.slice(3,)}</h5>
                        <div className='button-container'>
                            {options.map(answerOption => <button
                                onClick={() => handleCheck(answerOption)} className={`quiz-button ${selected && handleSelected(answerOption)}`}
                                key={answerOption}
                                disabled={selected}
                            >{answerOption}</button>)}
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default QuizArea;