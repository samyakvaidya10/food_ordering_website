import React, { useState } from 'react'
import nonVegImg from '../utils/images/non-veg.png'
import vegImg from '../utils/images/veg.png'
import RestMenuCardAddBtn from './RestMenuCardAddBtn'
import { ArrowDownSquare, ArrowUpSquare } from 'react-bootstrap-icons'
function RestaMenuCard(props) {
    const [isOpen,setIsOpen]=useState(true)
    const {card}=props
    const MENU_IMG_CDN='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/'

    
   
    return (
    <div className=' '>
        {/* Type Title  */}
        
            <button className='w-full flex justify-between font-bold text-lg '
                onClick={()=>{setIsOpen(!isOpen)}}>
                    <span className=' m-4  text-left'>
                        {card?.title} ({card?.itemCards?.length})
                    </span>
                        {/* to whow up or down arrow */}
                    <span className='m-4'>
                        {
                            isOpen?<ArrowUpSquare/>:<ArrowDownSquare />
                        }
                    </span>
                    
                    
            </button>
        
        
        {
        isOpen &&
        <div  className='transition  ' >
            {card?.itemCards?.map((item)=>{
                return(
                    <div className='m-4 border-b-2 flex justify-between  ' key={item.card.info.id}>
                        <div className='w-3/4'>
                            <div className='w-4'>
                               {item.card.info?.isVeg===1 ? <img alt='veg' src={vegImg} /> :<img alt='non-veg' src={nonVegImg} />}
                            </div>
                            <span className='font-medium'>{item.card.info.name}</span>
                            <span className='block text-sm font-normal mt-1'>₹ {item.card.info.price/100}</span>
                            <span className='block  text-sm font-light mt-2'>{item.card.info.description}</span>
                        </div>
                  
                        <div className="relative">
                            <img alt="restaurent"  className="object-cover object-center h-28 w-32 rounded-2xl" src={MENU_IMG_CDN+item.card.info.imageId}   />
                            <div className='flex absolute text-sm font-semibold hover:scale-105 duration-100 shadow-xl bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-100  rounded"'>
                                <RestMenuCardAddBtn item={item}/>
                            </div>
                        </div>  
                    </div>

                )
            })}
        </div>
        }
        

    </div>
  )
}

export default RestaMenuCard

/*
    1.add item in cart ->  object✅

*/