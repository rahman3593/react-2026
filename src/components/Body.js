import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestarauntsList from "../utils/useRestarauntsList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local state variables
  const [listOfRestaruants, setlistOfRestaruants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const restaurantList = useRestarauntsList();
  useEffect(() => {
    setlistOfRestaruants(restaurantList);
    setFilteredRestaurants(restaurantList);
  }, [restaurantList]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>🔴 You are offline, Please check your internet connection!!</h1>;
  }

  return !Array.isArray(listOfRestaruants) || listOfRestaruants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = listOfRestaruants.filter((res) =>
                res.info.name.toLowerCase().includes(searchInput.toLowerCase()),
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaruants.filter(
              (res) => res.info.avgRating > 4.7,
            );
            console.log(filteredList);
            setlistOfRestaruants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
