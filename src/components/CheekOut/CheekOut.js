import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CheekOut = () => {

    const { id } = useParams();
    const [cheekout, setCheekout] = useState({});

    useEffect(() => {
        fetch(`https://genius-e-courses-server.vercel.app/courses/${id}`)
            .then(res => res.json())
            .then(data => setCheekout(data))
    }, [])

    return (
        <div className="flex justify-center align-center mx-auto card w-[40%] bg-slate-100 shadow-xl mt-24">
            <div className="card-body">
                <h2 className="card-title">{cheekout.name}</h2>
                <p>{cheekout.description}</p>
            </div>
            <div>
                <figure ><img src={cheekout.img} /></figure>
                <p className='text-center p-4'>Price: ${cheekout.price}</p>
                <div className="flex justify-center align-center p-5">
                    <button className='btn btn-info'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CheekOut;