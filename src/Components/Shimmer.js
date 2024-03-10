import React from 'react';
import './shimmer.css'
const Shimmer = () => {
  

  return (
    <div className=' m-3 p-2 w-full md:w-4/5 md:mx-auto '>
      <div className="m-2 w-2/4 h-8 full shimmer bg-black"></div>
      <div className="m-2 my-7 w-full h-44 full shimmer bg-black"></div>

      <div className="m-2 w-2/4 h-8 full shimmer bg-black"></div>
      <div className="m-2 my-7 w-full h-44 full shimmer bg-black"></div>

      <div className="m-2 w-2/4 h-8 full shimmer bg-black"></div>
      <div className="m-2 my-7 w-full h-44 full shimmer bg-black"></div>
    </div>
  );
};

export default Shimmer;
