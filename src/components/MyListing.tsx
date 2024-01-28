import MyListCard from "./MyListCard";

const MyListing = () => {
  return (
    <>
      <div className=" flex w-full flex-col gap-2 ">
        <div className=" w-full ">
          <p>My listing</p>
        </div>
        <div className=" flex w-full flex-col gap-2  ">
          {[
            {
              name: "Nike Air Force One",
              price: 3200,
              src: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZHVjdHx8fHx8fDE3MDY0NDA3NTE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            },
            {
              name: "Oldschool Gameboy Color",
              price: 5400,
              src: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZHVjdHx8fHx8fDE3MDY0NDA4ODE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            },
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
