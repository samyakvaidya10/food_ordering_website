import React,{useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png'
import CartContext from "../utils/Context/CartContext";
import SearchContext from "../utils/Context/SearchContext";

const Header=()=>{
    
    
    const {cart}=useContext(CartContext);
    const {setSearchStr}=useContext(SearchContext)
    return(
        <div className="  top-0 sticky z-10  border-b-4 bg-white w-full ">
        
        {/* For Browser view  */}
        <div className=" flex justify-between mx-5   lg:mx-44 h-20  ">
        
                <Link to='/' onClick={()=>{setSearchStr("")}}>
                <div className="flex items-center ">
                    {/* <span className=" material-symbols-outlined">fastfood</span> */}
                    <img alt="logo" className="w-16 mt-2 rounded-full" src={logo}></img>
                    </div> 
                </Link>
            
                
                <ol className="flex items-center justify-end w-1/2 ">
                    <Link to='/cart'>
                        <li className="hover:font-medium">Cart {cart.count}</li>
                    </Link>
                    
                </ol>
            
            
                {/* <button onClick={handleClick}>{isLoggedIn?"Log Out":"Log in"}</button> */}
            
        </div>
        </div>
    )
}

export default Header