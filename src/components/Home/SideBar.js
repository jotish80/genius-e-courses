import React, { useEffect, useState } from 'react';
 
const SideBar = ({ getCourse }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/courses`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='w-[40%] bg-slate-50 mx-auto text-center p-8 rounded-md text-2xl text-primary mb-5'>
            <h1 className='text-2xl font-bold text-center pb-5 text-gray-900'>All Courses </h1>
            {
                courses.map(course => <p key={course.id}>

                    <h3 className='cursor-pointer' onClick={() => getCourse(course.id)}   >{course.name}</h3>
                </p>)
            }


        </div>
    );
};

export default SideBar;