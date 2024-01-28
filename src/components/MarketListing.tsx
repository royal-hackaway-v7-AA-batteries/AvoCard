import MarketProductCard from "./MarketProductCard";
import SectionTitle from "./SectionTitle";

const MarketListing = () => {
  return (
    <div className=" flex flex-col gap-2">
      <div className=" w-full ">
        <SectionTitle text="Community Listing" />
      </div>
      <div className=" col w-full columns-2 gap-2 lg:columns-3 ">
        {[
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        ].map((number) => {
          return <MarketProductCard key={number} />;
        })}
      </div>
    </div>
  );
};

export default MarketListing;
