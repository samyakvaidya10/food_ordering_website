import React, { useContext, useEffect, useRef, useState } from "react";
//import { API_URL } from "../utils/constants"

import './shimmer.css'
// import useFetchRestroData from "../../utils/Hooks/useFetchRestroData";
import WhatsOnYourMind from "./WhatsOnYourMind";
import TopRest from "./TopRest";
import restroData from "../utils/RestroData";
import RestrauntContainer from "./RestrauntContainer";
import SearchContext from "../utils/Context/SearchContext";
import Shimmer from "./Shimmer";
const Body=()=>{

    //search variable
    const {searchStr}=useContext(SearchContext)
    console.log(searchStr)
    const restrauentsListSection=useRef() //used for slroling to reslist section 
    const handleScroll=(elmRef)=>{
        const scrollPos=elmRef.current.offsetTop-100
        window.scrollTo({top:scrollPos,behavior:"smooth"})
    }
    
   
     //const  apiData=useFetchRestroData()
    const [apiData,setApiData]=useState(null);

    const fetchData=async()=>{
        // const data=await fetch(API_URL);
        // const json=await data.json();
       
        setApiData(restroData)    
        // setApiData(null)    
          
    }
    
    useEffect(()=>{
       // setApiData()
        fetchData()
    },[])

     const [dataIndex,setDataIndex]=useState({
        whats_on_your_mind:null,
        top_brands_for_you:null,
        popular_restaurants_title:null,
        restaurant_grid_listing:null
    })
    
    useEffect(()=>{
        if(apiData!==null){

            const dataArray=apiData.data.cards;
            dataArray.forEach((card,index) => {
               // console.log('in for each index'+index);
                //console.log(card.card.card.id) // take the id at per data index
                const id=card.card.card.id
                if(dataIndex.hasOwnProperty(id)){
                    setDataIndex((prevValues)=>{
                        let newObj={...prevValues}
                        newObj[id]=index;
                        return newObj;
                    })
                    //dataIndex[id]=index;
                }
            });
            
        }
    },[apiData])
    
     if(apiData===null||apiData===undefined||
            (dataIndex.whats_on_your_mind===null&&
            dataIndex.top_brands_for_you===null&&
            dataIndex.popular_restaurants_title===null&&
            dataIndex.restaurant_grid_listing===null)){
        return <div className="">
                <Shimmer />
        </div>
     }

    
    /*  get correspomding index's of required data
        data required from api are 
            1. whats_on_your_mind -> cousins
            2.top_brands_for_you -> TopRes 
            3.popular_restaurants_title -> title
            4.restaurant_grid_listing
    */
   //get whats on your mind data
   const whats_on_your_mind_data =apiData.data.cards[dataIndex['whats_on_your_mind']].card.card
   
    //get restrauents cards data
    const top_brands_for_you_data=apiData.data.cards[dataIndex['top_brands_for_you']].card.card.gridElements.infoWithStyle.restaurants; //top_brands_for_you 

    //popular_restaurants_title
     const popular_restaurants_title_data=apiData.data.cards[dataIndex['popular_restaurants_title']].card.card.title
     //restaurant_grid_listing
     const restaurant_grid_listing_data=apiData.data.cards[dataIndex['restaurant_grid_listing']].card.card.gridElements.infoWithStyle.restaurants;
     
   
    return(
        <div className="mx-4  w-full md:w-4/5 md:mx-auto  ">
            {/* whats on your mind */}
            <WhatsOnYourMind cousins={whats_on_your_mind_data} 
                handleScroll={handleScroll}
                restrauentsListSection={restrauentsListSection}
                />
            <TopRest restList={top_brands_for_you_data} />
            <div ref={restrauentsListSection}>
            <RestrauntContainer 
                popular_restaurants_title_data={popular_restaurants_title_data}
                restaurant_grid_listing_data={restaurant_grid_listing_data}
                searchText={searchStr}
                />
            
            </div>
        </div>
    )
    
}
export default Body