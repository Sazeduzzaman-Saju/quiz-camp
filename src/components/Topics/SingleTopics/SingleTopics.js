import React from 'react';
import './SingleTopics.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const SingleTopics = ({ catagories }) => {
    const { id, name, logo, total } = catagories;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/topics/${id}`);
    }
    return (
        <div >
            <Card className=' cards text-white mt-5 mb-5' >
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <div className='text-center'><Card.Title>{name}</Card.Title></div>
                    <div className='row topics-details'>
                        <div className='col-4  practice-info-area '>Quiz
                            <i className="fa-duotone fa-head-side-brain ms-2"></i>
                            <p className='ms-2 mt-3'>{total}</p>
                        </div>
                        <div className='col-8 practice-button-area'>
                            <Button className="practice-btn" onClick={handleClick}>Practice</Button></div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleTopics;