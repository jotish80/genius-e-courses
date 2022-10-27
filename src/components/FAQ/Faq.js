import React from 'react';
 

const Faq = () => {
    return (
        <div className='w-[90%] mx-auto mt-12 mb-12 text-slate-300'>
            <div className='shadow-lg p-20 rounded-lg'>
                <h1 className='text-2xl font-bold'>What is Node.js? What is it used for?</h1>
                <p className='text-xl'>
                    Q2. What is Event-driven programming?

                    Q3. What is Event loop in Node.js work? And How does it work?

                    Q4. What is REPL in Node.js?
                    Q5. What is the purpose of module.exports in Node.js?

                    Q6. What is the difference between Asynchronous and Non-blocking?

                    Q7. What is Tracing in Node.js?

                    Q8. How will you debug an application in Node.js?

                    Q9. Difference between setImmediate() vs setTimeout()

                    Q10. What is process.nextTick()
                    vent loop continues.
                    Q11. What is package.json? What is it used for?

                    Q12. What is libuv?
                    libuv is a multi-platform support library with a focus on asynchronous I/O. It was primarily developed for use by Node.js, but it’s also used by Luvit, Julia, pyuv, and others.
                    When the node.js project began in 2009 as a JavaScript environment decoupled from the browser, it is using Google’s V8 and Marc Lehmann’s libev, node.js combined a model of I/O – evented – with a language that was well suited to the style of programming; due to the way it had been shaped by browsers. As node.js grew in popularity, it was important to make it work on Windows, but libev ran only on Unix. libuv was an abstraction around libev or IOCP depending on the platform, providing users an API based on libev. In the node-v0.9.0 version of libuv libev was removed.
                    Some of the features of libuv are:
                    Full-featured event loop backed by epoll, kqueue, IOCP, event ports.
                    Asynchronous TCP and UDP sockets
                    Asynchronous file and file system operations
                    Child processes
                    File system events
                    Q13. What are some of the most popular modules of Node.js?
                    There are many most popular, most starred or most downloaded modules in Node.js. Some of them are:
                    express
                    async
                    browserify
                    socket.io
                    bower
                    gulp
                    grunt
                    Q14. What is EventEmitter in Node.js?
                    All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object.
                    When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously.
                </p>
            </div>

        </div>
    );
};

export default Faq;