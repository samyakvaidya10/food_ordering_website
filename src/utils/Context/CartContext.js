import { createContext } from "react";

const CartContext=createContext({
    cart:{
        count:0,
        items:{},
        totalPrice:0
    }
})
export default CartContext