import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
       const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/courses`)
        .then(res => res.json())
        .then(data =>setCourses(data))
    },[])
    return (
        <div className='w-[25%] bg-slate-50 mx-auto text-center p-8 rounded-md text-2xl text-primary'>
           
             {
                    courses.map(course => <p key={course.id}>
                            
                            <Link to={`/courses/${course.id}`} >{course.name}</Link>
                    </p> )
                }
        </div>
    );
};

export default SideBar;