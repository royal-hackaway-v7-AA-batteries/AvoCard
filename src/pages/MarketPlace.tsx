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
    <div id="market-place">
      <div id="search-container">
        <input
          type="search"
          placeholder={
            searchSuggestions[
              Math.floor(Math.random() * searchSuggestions.length)
            ]
          }
        />
      </div>
      <div id="listings-board">
        <div className="listings-column">
          <ItemListing />
          <ItemListing />
          <ItemListing />
          <ItemListing />
          <ItemListing />
          <ItemListing />
        </div>
        <div className="listings-column">
          <ItemListing />
          <ItemListing />
          <ItemListing />
          <ItemListing />
          <ItemListing />
          <ItemListing />
        </div>
        <div className="listings-column">
          <ItemListing />
          <ItemListing />
          <ItemListing />
          <ItemListing />
          <ItemListing />
          <ItemListing />
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
