import MarketListing from "../components/MarketListing";
import MarketProductCard from "../components/MarketProductCard";
import MyListing from "../components/MyListing";
import SearchField from "../components/SearchField";
import "./MarketPlace.scss";

function ItemListing() {
  return (
    <div className="item-listing">
      <img src="https://source.unsplash.com/random/900x700/?object" />
    </div>
  );
}

function MarketPlace() {
  const searchSuggestions: string[] = [
    "Phone cases",
    "iPhone charger",
    "T-shirts",
    "Leggings",
    "Socks",
    "Phone accessories",
    "Chargers",
    "T-shirt offers",
    "Legging choices",
    "Socks variety",
    "Smartphone covers",
    "Cellphone chargers",
    "Graphic tees",
    "Yoga pants",
    "Ankle socks",
    "Mobile accessories",
    "Power adapters",
    "Fashion tees",
    "Athletic leggings",
    "Crew socks",
    "Protective cases",
    "Wireless chargers",
    "Casual shirts",
    "Stylish leggings",
    "Cozy socks",
    "Designer phone cases",
    "Fast chargers",
    "Unique t-shirts",
    "Patterned leggings",
    "Comfy socks",
    "Slim phone cases",
    "USB chargers",
    "Vintage t-shirts",
    "Printed leggings",
    "Colorful socks",
  ];
  return (
    <div className=" flex h-full w-full flex-col items-center overflow-auto ">
      <SearchField />

      <MyListing />

      <MarketListing />
    </div>
  );
}

export default MarketPlace;
