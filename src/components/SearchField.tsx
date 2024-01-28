const SearchField = () => {
  const searchSuggestions: string[] = [
    "Phone cases",
    "iPhone charger",
    "T-shirts",
    "Leggings",
    "Socks",
    "Phone accessories",
    "Chargers",
    "T-shirt offers",
  ];

  return (
    <div className=" w-full max-w-96 overflow-hidden rounded-full ">
      <input
        type="search"
        className=" w-full px-4 py-1 focus:bg-gray-50 focus:outline-none "
        placeholder={
          searchSuggestions[
            Math.floor(Math.random() * searchSuggestions.length)
          ]
        }
      />
    </div>
  );
};

export default SearchField;
