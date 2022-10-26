import React from 'react';
import Courses from '../Courses/Courses';
import SideBar from './SideBar';
 

const Home = () => {
    
    return (
        <div className='flex justify-between align-center mt-12 '>
          <SideBar />
          <div className='w-[70%] bg-slate-100 mx-auto p-8 rounded-md'>
            <Courses />
               
          </div>
        </div>
    );
};

export default Home;