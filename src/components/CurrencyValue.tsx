import CurrencyDark from "../../public/assets/currency_dark.svg";

interface props {
  value: number;
  size?: "sm" | "md" | "lg";
}

function CurrencyValue({ value, size = "sm" }: props) {
  return (
    <div className=" flex h-fit gap-1 ">
      <img
        src={CurrencyDark}
        className={
          size == "sm"
            ? "w-3"
            : size == "md"
              ? "w-5"
              : size == "lg"
                ? "w-7"
                : ""
        }
      />
      <p
        className={
          size == "sm"
            ? " text-sm"
            : size == "md"
              ? " text-3xl"
              : size == "lg"
                ? " text-7xl"
                : ""
        }
      >
        {Intl.NumberFormat().format(value)}
      </p>
    </div>
  );
}

export default CurrencyValue;
