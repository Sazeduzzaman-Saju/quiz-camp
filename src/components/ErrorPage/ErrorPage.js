import React from 'react';
import './ErrorPage.css';
import ErrorImage from '../../img/errorpage/error-page.jpg'
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div>
            <section className='container'>
                <div className='row error-massage'>
                    <div className='col' data-aos="fade-up-left" data-aos-duration="1500">
                        <img src={ErrorImage} alt="" />
                    </div>
                    <div className='col text-center' data-aos="fade-up-left" data-aos-duration="3000">
                        <h3 className='mb-5 fw-bold'>Awww... Don't Cry.</h3>
                        <p className='mb-5 fw-bold'>It's Just A 404 Page</p>
                        <p className='fw-semibold'>What you'r looking for may have<br /> been misplaced in long term memory!!</p>
                        <Link to={'/'}><button className='btns' >Back Home</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;