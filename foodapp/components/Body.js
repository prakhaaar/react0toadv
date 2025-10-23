// ---------- IMPORTS ----------
import RestaurantCard, { witPromotedLable } from "./RestaurantCard"; // Default + named import
import { useEffect, useState } from "react"; // React Hooks
import Shimmer from "./Shimmer"; // Default export
import { FOODFIRE_API_URL } from "../../../public/Common/constants";
import RestrauntMenu from "../components/RestrauntMenu"; // (Will be used in routing)

// ---------- HELPER FUNCTION ----------
// Filters restaurant data based on the search input
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

// Higher Order Component (HOC) – adds "Promoted" label to a restaurant card
const LabelPromoted = witPromotedLable(RestaurantCard);

// ---------- MAIN COMPONENT ----------
const Body = () => {
  // ---------- STATE VARIABLES ----------
  // searchText → keeps track of user's input in the search bar
  // allRestaurants → stores all restaurant data from API
  // filteredRestaurants → stores restaurants filtered by search
  // errorMessage → displays message if no restaurant matches search input
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // ---------- USE EFFECT ----------
  // useEffect → runs once after the initial render to fetch restaurant data
  useEffect(() => {
    getRestaurants();
  }, []);

  // ---------- FETCH DATA FUNCTION ----------
  // Fetches Swiggy API data and extracts restaurant info safely
  async function getRestaurants() {
    try {
      const response = await fetch(FOODFIRE_API_URL);
      const json = await response.json();

      // Helper function to safely extract restaurant list from Swiggy's complex JSON
      function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // Get restaurant data
      const resData = checkJsonData(json);

      // Update state variables
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log("Error fetching restaurants:", error);
    }
  }

  // ---------- SEARCH FUNCTION ----------
  // Filters data based on searchText; shows error message if no match
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");

      if (filteredData?.length === 0) {
        setErrorMessage("No matching restaurant found 🍽️");
      }
    } else {
      // Reset search
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  // ---------- EARLY RETURN ----------
  // If restaurant data not available yet, don't render anything
  if (!allRestaurants) return null;

  // ---------- JSX RETURN ----------
  return (
    <>
      {/* ---------- SEARCH BAR ---------- */}
      <div className="search-container p-4 flex justify-center gap-2">
        <input
          type="text"
          className="search-input border border-gray-400 rounded-lg px-3 py-2 w-1/3"
          placeholder="Search for a restaurant..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // updates state as user types
        />
        <button
          className="search-btn bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
          onClick={() => searchData(searchText, allRestaurants)} // triggers search on click
        >
          Search
        </button>
      </div>

      {/* ---------- ERROR MESSAGE ---------- */}
      {errorMessage && (
        <div className="error-container text-center text-red-600 font-semibold">
          {errorMessage}
        </div>
      )}

      {/* ---------- RESTAURANT LIST ---------- */}
      {/* Show shimmer until data is fetched; then render restaurant cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list flex flex-wrap justify-center gap-6 p-6">
          {/* Map over filteredRestaurants array and render a card for each restaurant */}
          {filteredRestaurants.map((restaurant) => {
            const info = restaurant?.info;

            // Choose whether to render promoted label or normal card
            const CardComponent = info?.promoted
              ? LabelPromoted
              : RestaurantCard;

            // Return a clickable card linking to the restaurant’s menu
            return <CardComponent key={info?.id} {...info} />;
          })}
        </div>
      )}
    </>
  );
};

export default Body;
