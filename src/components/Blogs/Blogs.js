import React from 'react';

const Blogs = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-6 text-center">
                    <h2 className='text-center mt-4'>BLOGS</h2>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <h4>what is the main perspose of react router?</h4>
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
                </div>
                <div className="col-lg-4">
                    <h4>how does context api work?</h4>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className="col-lg-4">
                    <h4>what is useref in react?</h4>
                    <p>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with, React will set its .current property to the corresponding DOM node whenever that node changes</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;