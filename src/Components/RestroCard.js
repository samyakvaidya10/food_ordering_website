import React from 'react'
import { IMG_CDN } from '../utils/constants';

function RestroCard({restCardData}) {
    
    const {name,cuisines,avgRating,areaName,sla,aggregatedDiscountInfoV3}=restCardData.info
  
    const imgSrc=IMG_CDN + restCardData.info.cloudinaryImageId;
    // lg:w-11/12
    return (
      <div className='hover:scale-95 duration-100 h-1/4 px-2 w-80  mx-auto  lg:w-11/12  '>
        <div className='relative z-0 '>
          <img alt='food item' className='object-cover object-center w-80 h-44 lg:h-36  rounded-2xl ' src={imgSrc} />
          <h1 className='absolute bottom-0 bg-gradient-to-t from-black text-white text-xl font-extrabold rounded-b-2xl p-2 w-full '>
            {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</h1>
        </div>
          
          <div className='m-2'>
            <p className='text-lg font-semibold'>{name}</p>
            {/* <div className='flex items-center '>
              <span class="pt-1  material-symbols-outlined"> kid_star </span>{avgRating} - {slaString}
            </div> */}

            <div className='-mt-1 font-medium'> 
                <i className="bi bi-star"> </i>  
                <span>{avgRating}</span> - {sla.slaString}
              </div>
            <p className='truncate text-gray-500'>{cuisines.toString()}</p>
            <p className='text-gray-500'>{areaName}</p>
          </div>
      </div>
  )
}

export default RestroCard