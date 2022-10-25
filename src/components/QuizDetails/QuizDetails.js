import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import QuizOption from '../QuizOption/QuizOption';
import './QuizDetails.css';
import { EyeSlashIcon } from '@heroicons/react/24/solid'

const QuizDetails = ({ quiz, handleAns }) => {
    const { correctAnswer, question, options, id } = quiz;
    console.log(quiz)

    const handleOption = (event) => {
        if (correctAnswer == event) {
            toast.success('Correct Ans');
        }
        else {
            toast.error('Wrong Ans');
        }
    }

    return (
        <div className='col-lg-4 g-4'>
            <div className='quiz'>
                <div className="question">
                    {
                        <p>
                            {question}
                            <EyeSlashIcon className="icon" onClick={() => handleAns(id)} />
                        </p>
                    }
                </div>
                <div className="options row">
                    {
                        options.map((option) => <QuizOption option={option}
                            handleOption={handleOption}></QuizOption>)
                    }
                </div>
            </div>
        </div>
    );
};

export default QuizDetails;