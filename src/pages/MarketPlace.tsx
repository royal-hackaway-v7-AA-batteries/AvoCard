import MarketListing from "../components/MarketListing";
import MyListing from "../components/MyListing";
import SearchField from "../components/SearchField";
import "./MarketPlace.scss";

function MarketPlace() {
  return (
    <div className=" flex w-full flex-col items-center gap-6 ">
      <SearchField />

      <MyListing />

      <MarketListing />
    </div>
  );
}

export default MarketPlace;
