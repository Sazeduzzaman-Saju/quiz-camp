import React from 'react';
import './Home.css';
import heroBanner from '../../img/hero-quiz.svg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            <section className='container mt-5 '>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-lg-6 col-md-6 col-sm-1 '>
                        <div className='hero-info'>
                            <h1>A Community of online Quiz Camp</h1>
                            <p className='w-75 '>Quiz competition is to evaluate the knowledge of the participants within academics as well as beyond academics and to make them familiar with the prospects of quizzes and the objectivity.</p>
                            <Link to='/topics'><button className='btns'>Take A Quiz</button></Link>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-1 flex-sm-row-reverse'>
                        <img className='img-fluid hero-img' src={heroBanner} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;