import { useState, useEffect } from "react";

const useRestarauntsList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  return restaurantList;
};

export default useRestarauntsList;
