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
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
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
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
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
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
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
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
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
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
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
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;