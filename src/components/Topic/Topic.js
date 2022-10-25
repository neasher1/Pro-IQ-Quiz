import React from 'react';
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
                <button className='btn'>Start Practice</button>
            </div>
        </div>
    );
};

export default Topic;