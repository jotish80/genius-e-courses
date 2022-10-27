import React, { useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';
import SideBar from '../Home/SideBar';

const Courses = () => {

    const [course , setCourse] = useState({});
  
    const getCourse =(id)=>{
        fetch(`https://genius-e-courses-server.vercel.app/courses/${id}`)
        .then(res => res.json())
        .then(data => setCourse(data))
    }
    return (
        <div className='flex justify-between align-center mt-24 sm:flex-col lg:flex-row'>
            <SideBar getCourse={getCourse} />
           <div className='w-[50%] bg-slate-100 mx-auto p-8 rounded-md '>
             <CourseDetails course={course} />    
           </div>
        </div>
    );
};

export default Courses;