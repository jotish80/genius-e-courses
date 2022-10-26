import React from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';
import SideBar from '../Home/SideBar';

const Courses = () => {
    return (
        <div className='flex justify-between align-center mt-12 '>
            <SideBar />
           <div className='w-[70%] bg-slate-100 mx-auto p-8 rounded-md'>
             <CourseDetails />
               
          </div>
        </div>
    );
};

export default Courses;