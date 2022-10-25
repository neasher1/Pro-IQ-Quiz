import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quiz = useLoaderData();

    const allQuizData = quiz.data.questions;
    const handleAns = (id) => {
        const quizFounded = allQuizData.find(quiz => quiz.id === id);
        if (quizFounded) {
            const correctAns = quizFounded.correctAnswer;
            if (correctAns) {
                toast.success(`Correct Ans Is : ${correctAns}`, { autoClose: 5000 })
            }
        }
    };

    return (
        <div className="container">
            <div className='row gx-2 gy-2'>
                <h2>Quiz of {quiz.data.name}</h2>
                <div className='row'>
                    {
                        quiz.data.questions.map(quiz => <QuizDetails
                            key={quiz.id}
                            quiz={quiz}
                            handleAns={handleAns}
                        ></QuizDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quiz;