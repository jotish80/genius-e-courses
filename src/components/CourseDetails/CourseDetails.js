import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = ({ course }) => {

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='btn btn-info w-[50%] mx-auto' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref} className="card-body">
                <h2 className="card-title">{course.name}</h2>
                <p>{course.description}</p>
            </div>
            <div>
                <figure ><img src={course.img} /></figure>
                <p className='text-center p-4'>Price: ${course.price}</p>
            </div>
        </div>


    );
};

export default CourseDetails;