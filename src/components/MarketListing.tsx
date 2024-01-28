import MarketProductCard from "./MarketProductCard";

const MarketListing = () => {
  return (
    <div className=" col w-full columns-3 gap-2 ">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((number) => {
        return (
          <MarketProductCard key={number} />
          // <div
          //   key={number}
          //   className={`" mb-2 h-32 w-full break-inside-avoid bg-zinc-400 `}
          // ></div>
        );
      })}
    </div>
  );
};

export default MarketListing;
