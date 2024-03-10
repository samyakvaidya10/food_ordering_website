import React,{useContext} from 'react'
import RestroCard from "./RestroCard";
import { Link } from "react-router-dom";
import SearchContext from '../utils/Context/SearchContext';
function RestrauntContainer({popular_restaurants_title_data,restaurant_grid_listing_data,searchText}) {

    const {searchStr,setSearchStr}=useContext(SearchContext)

    //const [searchText,setSearchText]=useState(searchStr)


  return (
    <div className='mt-5 h-screen'>
    
    {/* <div className="m-5 "></div> */}
            <div className='md:flex justify-between'>
              <span  className="text-base md:text-3xl font-bold">{popular_restaurants_title_data}</span>
              <input onChange={(e)=>{setSearchStr(e.target.value)}} value={searchStr} type="text" placeholder="search"
                className='my-1 search-input focus:outline-none focus:border-black  focus:ring-opacity-50 rounded-lg px-3   border border-gray-500'></input>  

            </div>

            
            <div className='mx-auto  grid md:grid-cols-2 lg:grid-cols-4 md:gap-1 mt-5'>
                

                {restaurant_grid_listing_data.filter((restaurant)=>{
                        let returnValue=false;
                        
                        restaurant.info.cuisines.forEach((cuis)=>{ 
                                  if(cuis.toLowerCase().includes(searchStr.toLowerCase()))
                                    returnValue=true;
                                })
                        return returnValue||restaurant.info.name.toLowerCase().includes(searchStr.toLowerCase())
                    }).map((restaurant)=>{
                            return <div key={restaurant.info.id}>
                                        <Link to={'/restaurant/'+restaurant.info.id}>
                                        <RestroCard  restCardData={restaurant} />
                                            
                                        </Link>
                                    </div>
                    
                    
                })
                    }
                
                
            </div>
    </div>
  )
}

export default RestrauntContainer  
