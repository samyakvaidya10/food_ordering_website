import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import CartContext from './utils/Context/CartContext';
import SearchContext from './utils/Context/SearchContext';

function App() {
  const [cart,setCart]=useState({
    count:0,
    items:{},
    totalPrice:0
   })
   const [searchStr,setSearchStr]=useState("")
  return (
   <> 
   <SearchContext.Provider value={{searchStr:searchStr,setSearchStr:setSearchStr}} >
    <CartContext.Provider value={{cart:cart,setCart:setCart}}>
      <Header />
      <Outlet />
    </CartContext.Provider>
   </SearchContext.Provider>
   </>
  )
}

export default App;
