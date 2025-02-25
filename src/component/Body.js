import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  const [list, setresList] = useState([]);
  const [filteredlist, setfilteredList] = useState([]);
  const [searchText, setsearchText] = useState("");

  console.log("Body render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const output = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.926897447151084&lng=75.87660178542137&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await output.json();
    console.log(output, jsonData);
    setresList(
      jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredList(
      jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="body-container">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        ></input>

        <button
          onClick={() => {
            let newlist = list.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredList(newlist);
          }}
        >
          Search
        </button>
      </div>

      <button
        onClick={() => {
          const updatedList = list.filter((res) => res.info.avgRating > 4.3);
          setresList(updatedList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="restauarnt-cards-conatiner">
        {filteredlist.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resObj={restaurant} />
        ))}

        {/* <RestaurantCard resObj={obj[1]} />
          <RestaurantCard resObj={obj[2]} /> */}
      </div>
    </div>
  );
};

export default Body;
