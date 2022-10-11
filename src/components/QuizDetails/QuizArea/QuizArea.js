import React from 'react';
import './QuizArea.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizArea = ({ qu }) => {
    console.log(qu)
    const { question, correctAnswer, options } = qu;

    const toastId = React.useRef(null);

    const notify = () => {
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast(correctAnswer);
        }
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
                        <h5 className='text-center questions-title mb-3'>{question}</h5>
                        <div className='p-2 mb-2 question-option'>
                            <input type="radio" value="Male" name="gender" /> {options[0]}
                        </div>
                        <div className='p-2 mb-2 question-option'>
                            <input type="radio" value="Male" name="gender" /> {options[1]}
                        </div>
                        <div className='p-2 mb-2 question-option'>
                            <input type="radio" value="Male" name="gender" /> {options[2]}
                        </div>
                        <div className='p-2 mb-2 question-option'>
                            <input type="radio" value="Male" name="gender" /> {options[3]}
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuizArea;