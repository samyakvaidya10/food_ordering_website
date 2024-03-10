import React, { useContext } from "react";
import CartContext from "../utils/Context/CartContext";

const RestMenuCardAddBtn =({item})=>{
    const value=useContext(CartContext);
    const itemId=item.card.info.id;


    const addItemToCartFunction =(item)=>{

        value.setCart((prevVal)=>{
           
            const newCart={...prevVal}
            if(newCart.items[itemId]===undefined){
                newCart.items={
                    ...newCart.items,
                    [itemId]:{
                        count:1,
                        item:item
                    }
                }
            }else{
                newCart.items[itemId].count +=1;
            }
            newCart.count =newCart.count+1
            newCart.totalPrice=newCart.totalPrice + (item.card.info.price/100)
            return newCart
        })
    }

    const removeItemFromCart=()=>{

        value.setCart((prevValue)=>{

            const newCart={...prevValue}
            newCart.items[itemId].count =prevValue.items[itemId].count -1
           
            if(newCart.items[itemId].count===0){
                delete newCart.items[itemId]
            }
            newCart.count =newCart.count-1
            newCart.totalPrice=newCart.totalPrice - (item.card.info.price/100)
            return newCart
        })
    }
    return(

        <>
            {value.cart.items[itemId]===undefined?
            <button className="p-2 px-7"  
                onClick={()=>{addItemToCartFunction(item)}}>
                    ADD
                </button>
                :
            <>
            <button className="p-2 mx-2 " 
                onClick={()=>{removeItemFromCart()}}
            >-</button>
            <span className="p-2 ">{value.cart.items[itemId].count}</span>
            <button className="p-2 mx-2"
                onClick={()=>{addItemToCartFunction(item)}} 
            >+</button>
            </>}
        </>
            )
}
export default RestMenuCardAddBtn
/*
cart={
    count:0,
    items:{
        1:{
            count:0,
            item:{}
        },
        2
    }
}
*/