import CurrencyDark from "../../public/assets/currency_dark.svg";

interface props {
  value: number;
}

function CurrencyValue({ value }: props) {
  return (
    <div className=" flex gap-1 ">
      <img src={CurrencyDark} className=" w-3 " />
      <p>{value}</p>
    </div>
  );
}

export default CurrencyValue;
