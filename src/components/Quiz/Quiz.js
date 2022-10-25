import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quiz = useLoaderData();
    return (
        <div>
            <h2>Quiz of {quiz.data.name}</h2>
            {
                quiz.data.questions.map(quiz => <QuizDetails
                    key={quiz.id}
                    quiz={quiz}
                ></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;