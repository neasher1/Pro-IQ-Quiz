import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';
import Banner from '../../../src/banner.jpg';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className="banner col-lg-12">
                <img src={Banner} alt="" />
                <p className='quiz-details'>Check out our online computer programming quizzes to enhance your knowledge, learn new things or prepare for an upcoming test. Made up of well-researched and interesting quiz questions, each and every quiz here can test your awareness and grasp of the subject.</p>
            </div>
            <div className="container">
                <div className='full-topics-container row'>
                    {
                        topics.data.map(topic => <Topic
                            key={topic.id}
                            topic={topic}
                        ></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topics;