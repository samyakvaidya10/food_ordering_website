import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaMenuCard from "./RestaMenuCard";

import Shimmer from "./Shimmer";
const Restaurant = () => {
  //const resInfo=useFetchMenu()
  const [resInfo, setResInfo] = useState(null);
  //const resInfo= newRestroData;
  const { resId } = useParams();
  const fetchData = async () => {
    const url =
     // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.62993&lng=77.140996&restaurantId=253596&submitAction=ENTER";
      "https://samyakvaidya10.github.io/food_ordering_website_data/restaurant/"+resId+".json";
    const data = await fetch(url);
    const json = await data.json();
    setResInfo(json);
  };

  useEffect(() => {
    fetchData()
    //setResInfo(restaurantInfo[resId]);
  },[]);

  //used for re changes purpose

  console.log(resInfo);

  if (resInfo === null || resInfo === undefined) {
    return <Shimmer />;
  }
  
  const resDetails = resInfo.data.cards[0].card.card.info;
  const menus = resInfo.data.cards[1]?.groupedCard?.cardGroupMap.REGULAR.cards;
  
  return (
    <div className="mx-2 md:w-2/3 ml-auto mr-auto">
      {/* <RestaMenuCard card={menus[1]?.card?.card}/> */}
      <div className=" ml-auto mr-auto p-4">
        <h1 className="text-xl font-bold">{resDetails.name}</h1>
        <p className="truncate text-gray-500">
          {resDetails.cuisines.toString()}
        </p>
      </div>
      {menus.map((menu, i) => {
        return (
          <div key={i * 10}>
            <RestaMenuCard card={menu?.card?.card} />
          </div>
        );
      })}
    </div>
  );
};
export default Restaurant;
/*
    1st card for the title till offers

*/
