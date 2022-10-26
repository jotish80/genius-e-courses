import React from 'react';

const Blog = () => {
    return (
        <div className='w-[90%] mx-auto mt-12 mb-12 text-slate-300'>
            <div className='shadow-lg p-20 rounded-lg'>
                <h1 className='text-2xl font-bold'>What is cors?</h1>
                <p className='text-xl'>
                    CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                </p>
            </div>
            <div className='shadow-lg p-20 rounded-lg mt-10'>
                <h1 className='text-2xl font-bold'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='text-xl'>
                    The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                </p>
                <p className='text-xl'>Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>
            <div className='shadow-lg p-20 rounded-lg mt-10'>
                <h1 className='text-2xl font-bold'>How does the private route work?</h1>
                <p className='text-xl'>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
                </p>
            </div>
            <div className='shadow-lg p-20 rounded-lg mt-10'>
                <h1 className='text-2xl font-bold'>What is Node? How does Node work?</h1>
                <p className='text-xl'>
                    Node As an asynchronous event-driven JavaScript runtime .It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>
            </div>
        </div>
    );
};

export default Blog;