import React from 'react';
import express from '../../images/express.png';
import node from '../../images/node.png';
import mongo from '../../images/mongo.png';
import python from '../../images/python.png';
import go from '../../images/go.jpg';
import tailwind from '../../images/tailwind.png';


const Header = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-8 mt-24 sm:grid-cols-1 mx-12'>
            <div className="card w-96 bg-slate-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={express} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">EXPRESS JS</h2>
                    <p>Learn express quickly!</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-slate-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={node} alt="Shoes" className="rounded-xl w-[70%]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">NODE JS</h2>
                    <p>It is the proper time to learn node js</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-slate-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={mongo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">MONGO DB</h2>
                    <p>MERN stack you should learn MONGO DB</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-slate-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={go} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">GO </h2>
                    <p>Most popular programming language</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-slate-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={python} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">PYTHON</h2>
                    <p>Easy to learn this programming language</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-slate-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={tailwind} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">TAILWIND CSS</h2>
                    <p>Highly demanded css framework</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;