import { useRef } from "react";
import { Link } from "react-router-dom";
import RestroCard from "./RestroCard";
import { ArrowRightCircle,ArrowLeftCircle } from 'react-bootstrap-icons'

import './TopRes.css';
const TopRest =({restList})=>{
    
    const containerRef=useRef(null)
        
    
    const scrollRight=()=>{
        if (containerRef.current) {
            containerRef.current.scrollLeft += 600;
          }
    }

    const scrollLeft=()=>{
        if (containerRef.current) {
            containerRef.current.scrollLeft += -600;
          }
    }

    return(<>
        <div className="flex">
                        <span className="py-4  text-base md:text-3xl font-bold">Top Rated Restaurant</span>
                        <div className="inline-block ml-auto mt-3 text-xl ">
                            <button className=" mx-2"
                            onClick={scrollLeft}>
                                <ArrowLeftCircle color="gray"  size={30}/>
                            </button>
                            <button className=""
                            onClick={scrollRight}>
                                <ArrowRightCircle color="gray" size={30} />
                            </button>
                        </div>
        </div>
        
        <div ref={containerRef} id="scroll-container"  className="  grid grid-flow-col custom-overflow   transition-transform mb-5   " 
         style={{  scrollBehavior: 'smooth' }}>
            
            {
            restList.map((restaurant)=>{
                return <div className="py-2 px-2 w-80" key={restaurant.info.id} >
                            <Link  to={'/restaurant/'+restaurant.info.id}>
                            <RestroCard restCardData={restaurant} />
                            </Link>
                        </div>
        
        
    })
        }</div>
        </>
    )
}

export default TopRest