import React, { useState } from 'react';
import {  FaUser } from 'react-icons/fa';
 

const NavBar = () => {
     const [isExpanded, toggleExpansion] = useState(false);
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div>
                        <h1 className="text-3xl font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Genius-E-Learning</h1>
                    </div>
                

                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                        onClick={() => toggleExpansion(!isExpanded)}
                    >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`${isExpanded ? `block` : `hidden`
                    } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-sm lg:flex-grow">

                        <h1  className=" text-2xl font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Courses
                        </h1>

                        <h1 className=" text-2xl font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Blog
                        </h1>
                        <h1 className=" text-2xl font-bold block mt-4 ml-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            FAQ
                        </h1>
                    </div>
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <button>Dark</button>
                    <FaUser />
                </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;