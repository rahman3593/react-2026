import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
