import React, { useContext, useState } from "react";
import CartContext from "../utils/Context/CartContext";
import nonVegImg from '../utils/images/non-veg.png'
import vegImg from '../utils/images/veg.png'
import RestMenuCardAddBtn from './RestMenuCardAddBtn'
import { Link } from "react-router-dom";
const MENU_IMG_CDN='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/'
const Cart =()=>{
    const {cart}=useContext(CartContext)
    
    const cartItemArrays=Object.entries(cart.items)
    
    const [itemToDisplay,setItemToDisplay]=useState(null)

    const toggleItemToDisplay=(index)=>{
        if(itemToDisplay===index){
            setItemToDisplay(null)
        }else{
            setItemToDisplay(index)
        }
    }

    if(cart.count<=0){
        return <div>
            <h1 className="m-5 md:text-center text-2xl font-semibold">Your cart is empty </h1>
            <h1 className="m-5 md:text-center text-2xl font-semibold">Explore best food in your area</h1>
            <h1 className="m-5 md:text-center text-2xl font-semibold text-blue-900"><Link to='/' >Click here Home </Link></h1>
        </div>
    }

    return (
    <div>
        <h1 className="m-5 md:text-center text-base font-semibold">Your Cart</h1>
            
        <div className="m-5 md:h-4/5 md:flex md:justify-center md:w-3/4 md:mx-auto">
        
        <div className="md:w-1/2 text-center ">
            <table className="border-b-2  border-l-gray-800">
                <thead className="border-b-2  border-l-gray-800">
                    <tr>
                        <th className="w-80 border-r-2  border-l-gray-800">Item name</th>
                        <th className="w-44 border-r-2  border-l-gray-800">price</th>
                        <th className="w-44 border-r-2  border-l-gray-800">quantity</th>
                        <th className="w-44">total</th>
                        <th className="w-20">Item</th>
                    </tr>
                </thead>
                <tbody>
                {cartItemArrays.map((item,index)=>{
                return(<>
                    <tr key={item[1].item.card.info.id}>
                        <td className="border-r-2 border-b-2  border-l-gray-800"><span>{item[1].item.card.info.name}</span></td>
                        <td className="border-r-2 border-b-2 border-l-gray-800"><span>{item[1].item.card.info.price/100}</span></td>
                        <td className="border-r-2 border-b-2 border-l-gray-800"><span>{item[1].count}</span></td>
                        <td className="border-r-2 border-b-2 border-l-gray-800">
                            <button onClick={()=>{toggleItemToDisplay(index)}}>{itemToDisplay===index?"Hide":"Show"}</button>
                        </td>
                        <td className="border-b-2 border-l-gray-800"><span>{item[1].count*item[1].item.card.info.price/100}</span></td>
                        
                    </tr>
                    
                    </>
                )})}
                
                <tr className="border-t-2  border-l-gray-800">
                        <td className=""><span></span></td>
                        <td className=" "><span></span></td>
                        <td className="border-r-2  border-l-gray-800"><span>Total Amount</span></td>
                        <td className="border-b-2 border-l-gray-800"><span>{Math.floor(cart.totalPrice *100)/100 }</span></td>
                    </tr>
                </tbody>
            </table>
            
        </div>
        {itemToDisplay!==null&&
        <div className="md:w-1/2 transition-all duration-500">
            {itemToDisplay!==null&&itemToDisplay!==undefined&&<ItemToDisplay item={cartItemArrays[itemToDisplay]} setItemToDisplay={setItemToDisplay}/>}
        </div>
        }
    </div>
    </div>)
}

const ItemToDisplay =({item,setItemToDisplay})=>{
    if(item===undefined||item===null){
        return null
    }
    return(<div className="md:border-l-2  md:border-l-gray-800 ">
    
      
          <div className='m-4 md:mt-0 md:ml-6 border-b-2 flex justify-between h-36 ' >
          <div className="w-3/4">
              <div className='w-4'>
                 {item[1].item.card.info?.isVeg===1 ? <img alt="cart item veg" src={vegImg} /> :<img alt="cart item nonveg" src={nonVegImg} />}
                  
                  
              </div>
              <span className='font-medium'>{item[1].item.card.info.name}</span>
              <span className='block text-sm font-normal mt-1'>₹ {item[1].item.card.info.price/100}</span>
              <span className='block text-sm font-light mt-2'>{item[1].item.card.info.description}</span>
          </div>
    
          <div className="relative">
              <img  className="object-cover object-center h-28 w-32 rounded-2xl" src={MENU_IMG_CDN+item[1].item.card.info.imageId} alt="cart item"  />
              <div className='flex absolute text-sm font-semibold hover:scale-105 duration-100 shadow-xl bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-100  rounded'>
                  <RestMenuCardAddBtn item={item[1].item}/>
              </div>
          </div>  
          
      </div>
      <button className=" px-4 py-2 block ml-auto mr-4 font-semibold  hover:scale-105 duration-100 shadow-xl  bg-slate-100  rounded"
        onClick={()=>{setItemToDisplay(null)}}
        >Hide</button>
     
</div>)
}
export default Cart