 
import React, { useContext, useState } from 'react';
import {  FaUser } from 'react-icons/fa';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UseContexts';
import edu from '../../edu.png';
import ReactTooltip from 'react-tooltip';
 
 

const NavBar = () => {
    
     const [isExpanded, toggleExpansion] = useState(false);
     const {user, logOut} = useContext(AuthContext);
     console.log(user);

      const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <img className='w-10 mr-4' src={edu} alt="" />
                <div>
                        <NavLink to='/' className="text-3xl font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Genius-E-Learning</NavLink>
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
                    <div className="text-sm sm:flex-grow lg:items-center">

                        <NavLink to='/courses'  className=" text-2xl font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Courses
                        </NavLink>

                        <NavLink to='blog' className=" text-2xl font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Blog
                        </NavLink>
                        <NavLink to='faq' className=" text-2xl font-bold block mt-4 lg:inline-block lg:ml-4 lg:mt-0 text-teal-200 hover:text-white">
                            FAQ
                        </NavLink>
                        
                    </div>
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <button className='mr-4'>Dark Mood</button>
                        {user?.uid ?
                        <>
                             <span className='mr-4'>{user?.displayName}</span>
                             <button className='mr-4' onClick={handleLogOut}>Log Out</button>
                        </>
                         :
                         <>
                         <NavLink to='login' className=" text-2xl font-bold block mt-4 lg:inline-block lg:ml-4 lg:mt-0 text-teal-200 hover:text-white">
                            LogIn
                        </NavLink>
                         <NavLink to='register' className=" text-2xl font-bold block mt-4 mr-4 lg:inline-block lg:ml-4 lg:mt-0 text-teal-200 hover:text-white">
                            Register
                        </NavLink>
                         </>
                        }
                        
                        {user?.photoURL?
                        <>
                            <p data-tip={user.displayName}><img  className='rounded-lg' style={{height:'30px'}} src={user?.photoURL} alt=""  /> </p>
                        <ReactTooltip />
                        </>
                        
                        : <FaUser />
                        }
                
                </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;