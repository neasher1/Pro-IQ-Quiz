import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../src/layouts/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import Quiz from './components/Quiz/Quiz';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Topics></Topics>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/quiz/:quizId',
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <Quiz></Quiz>
        }
      ]
    },
    {
      path: '*',
      element: <div><h2>404: Not Found</h2></div>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
