import React from 'react';
import QuizOption from '../QuizOption/QuizOption';

const QuizDetails = ({ quiz }) => {
    // console.log(quiz.options)
    const { correctAnswer, question, options } = quiz;
    // console.log(options[0])
    return (
        <div>
            <div className="question">
                {
                    question
                }
            </div>
            <div className="options">
                {
                    options.map((option, idx) => <QuizOption key={idx} option={option}></QuizOption>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;