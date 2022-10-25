import React from 'react';
import './QuizOption.css';
const QuizOption = ({ option, handleOption }) => {
    // console.log(option)
    return (
        <div className='col-lg-6'>
            <p className='option' onClick={() => handleOption(option)}>{option}</p>
        </div>
    );
};

export default QuizOption;