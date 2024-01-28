import "./TreasureChest.scss";
// import currencyLogoLight from "../assets/currency_light.svg";
import currencyLogoLight from "../../public/assets/currency_dark.svg";

function RewardCard() {
  return (
    <div className="reward-card">
      <div className="icon">T</div>
      <div className="info-container">
        <div className="title">20% off one item</div>
        <div className="location">Redeem at SU shop</div>
      </div>
      <div className="price">
        <img src={currencyLogoLight} />
        <div>500</div>
      </div>
    </div>
  );
}

function TreasureChest() {
  return (
    <>
      <RewardCard />
    </>
  );
}

export default TreasureChest;
