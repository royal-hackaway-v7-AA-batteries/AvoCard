import CurrencyValue from "./CurrencyValue";
import SectionTitle from "./SectionTitle";

const BalanceSection = () => {
  return (
    <div className=" flex flex-col gap-4 bg-white p-2 ">
      <div id="balance-container">
        <SectionTitle text="Balance" />
        <div className=" flex w-full justify-center py-4 ">
          <CurrencyValue value={3700} size="md" />
        </div>
      </div>
      <div id="upcoming-container">
        <SectionTitle text="Upcoming / Due" />
        <div className=" flex w-full justify-center py-4 ">
          <CurrencyValue value={150} size="md" />
        </div>
      </div>
    </div>
  );
};

export default BalanceSection;
