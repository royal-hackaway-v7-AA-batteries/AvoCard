import CurrencyValue from "./CurrencyValue";

const MarketProductCard = () => {
  const productNames: string[] = [
    "Phone cases",
    "iPhone charger",
    "T-shirts",
    "Leggings",
    "Socks",
    "Phone accessories",
    "Chargers",
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

  // useEffect(() => {
  //   fetch("https://api.unsplash.com/photos/random")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // });

  return (
    <div className=" flex break-inside-avoid flex-col gap-2 pb-3 ">
      <div>
        <img
          loading="lazy"
          src={`https://source.unsplash.com/random/?${productNames[Math.floor(Math.random() * productNames.length)].replace(/_/g, "+")}`}
          alt=""
        />
      </div>
      <div className=" flex w-full justify-between text-sm ">
        <p>{productNames[Math.floor(Math.random() * productNames.length)]}</p>
        <CurrencyValue value={Math.floor(Math.random() * 1000 + 800)} />
      </div>
    </div>
  );
};

export default MarketProductCard;
