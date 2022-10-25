import React from 'react';
import { Link } from 'react-router-dom';
import Statistics from '../Statistics/Statistics';
import './Topic.css';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className='col-lg-6 g-2'>
            <div className='topic-container gx-2'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="topics-details">
                    <h2>{name}</h2>
                    <p>Total Quiz: {total}</p>
                    <Link className='btn btn-success' to={`/quiz/${id}`}>Start Practice</Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;