import React ,{useContext, useRef} from "react";
import { ArrowRightCircle,ArrowLeftCircle } from 'react-bootstrap-icons'
import SearchContext from "../utils/Context/SearchContext";
export default function WhatsOnYourMind ({cousins,handleScroll,restrauentsListSection,setSearchText}){
   
    const {setSearchStr}=useContext(SearchContext)
    
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

    return(
        <>
        <div className="flex ">
                        <span className="py-4   text-base md:text-3xl font-bold">{cousins.header.title}</span>
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
        
        <div ref={containerRef} id="scroll-container" className="flex custom-overflow transition-transform  " 
         style={{  scrollBehavior: 'smooth' }}>{
        cousins.gridElements.infoWithStyle.info.map((cousin)=>{
        return <div onClick={()=>{handleScroll(restrauentsListSection)
                                    setSearchStr(cousin.action.text)}} key={cousin.id} className="m-5 h-40 w-40">
                    <img  className=" object-fill h-48 w-48" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+cousin.imageId}/>
                   <div className="w-40"></div>
                </div>
            })
        }</div>

       
        </>
 
    )
}