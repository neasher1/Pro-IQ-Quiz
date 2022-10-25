import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className='topic-container'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="topics-details">
                <h2>{name}</h2>
                <p>Total Quiz: {total}</p>
                <Link className='btn' to={`/quiz/${id}`}>Start Practice</Link>
            </div>
        </div>
    );
};

export default Topic;