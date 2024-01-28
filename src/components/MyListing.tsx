import MyListCard from "./MyListCard";

const MyListing = () => {
  return (
    <>
      <div className=" flex w-full flex-col gap-4 ">
        <div className=" w-full ">
          <p>My listing</p>
        </div>
        <div className=" flex w-full flex-col gap-2  ">
          {[
            { name: "Cool torch", price: 1200 },
            { name: "Humidifier unused", price: 3200 },
          ].map((product, index) => {
            return (
              <MyListCard product={product} key={index} />
              // <div
              //   key={number}
              //   className={`" mb-2 h-32 w-full break-inside-avoid bg-zinc-400 `}
              // ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyListing;
