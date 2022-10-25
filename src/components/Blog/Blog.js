import React from 'react';

const Blog = () => {
    return (
        <div className='w-[90%] mx-auto mt-12 mb-12'>
            <div className='shadow-lg p-20 rounded-lg'>
                <h1 className='text-2xl font-bold'>What is the purpose of react router?</h1>
                <p className='text-xl'>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.We will use React Router to navigate between these components.
                </p>
            </div>
            <div className='shadow-lg p-20 rounded-lg mt-10'>
                <h1 className='text-2xl font-bold'>How does the context api work?</h1>
                <p className='text-xl'>
                    React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it (usually you are only able to pass data from parent to child via props).
                </p>
            </div>
            <div className='shadow-lg p-20 rounded-lg mt-10'>
                <h1 className='text-2xl font-bold'>Why you should use useRef Hook?</h1>
                <p className='text-xl'>
                    The useRef Hook lets us create mutable variables inside functional components. There are three main key points that you should keep in mind when using the useRef Hook: <br />

                    a) A ref created with useRef will be created only when the component has been mounted and preserved for the full lifecycle. <br />
                    b) Refs can be used for accessing DOM nodes or React elements, and for storing mutable variables (like with instance variables in class components). <br />
                    c) Updating a ref is a side effect so it should be done only inside a useEffect (or useLayoutEffect) or inside an event handler.
                </p>
            </div>
        </div>
    );
};

export default Blog;