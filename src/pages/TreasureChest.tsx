import "./TreasureChest.scss";
import currencyLogoLight from "../../public/assets/currency_light.svg";
import { LuBadgePercent } from "react-icons/lu";
import { FaBook, FaHamburger, FaPenAlt, FaWineBottle } from "react-icons/fa";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaPencil } from "react-icons/fa6";

const icons: { [key: string]: JSX.Element } = {
  discount: <LuBadgePercent fontSize={30} />,
  meal: <FaHamburger fontSize={30} />,
  notebook: <FaBook fontSize={30} />,
  ticket: <BsTicketPerforatedFill fontSize={30} />,
  pen: <FaPenAlt fontSize={30} />,
  drink: <FaWineBottle fontSize={30} />,
  pencil: <FaPencil fontSize={30} />,
};

function RewardCard({
  title,
  location,
  icon,
  cost,
}: {
  title: string;
  location: string;
  icon: string;
  cost: number;
}) {
  return (
    <div className="reward-card">
      <div className="icon">{icons[icon]}</div>
      <div className="info-container">
        <div className="title">{title}</div>
        <div className="location">Redeem at {location}</div>
      </div>
      <div className="price">
        <img src={currencyLogoLight} />
        <div>{cost}</div>
      </div>
    </div>
  );
}

function TreasureChest() {
  return (
    <div>
      <div id="treasure-chest">
        <RewardCard
          title="20% off one item"
          location="SU shop"
          icon="discount"
          cost={600}
        />
        <RewardCard
          title="Free meal @ canteen"
          location="Canteen"
          icon="meal"
          cost={950}
        />
        <RewardCard
          title="Merch notebook"
          location="SU shop"
          icon="notebook"
          cost={500}
        />
        <RewardCard
          title="SU Event Ticket"
          location="SU front desk"
          icon="ticket"
          cost={900}
        />
        <RewardCard
          title="Merch pen"
          location="SU shop"
          icon="pen"
          cost={400}
        />
        <RewardCard
          title="Meds ticket"
          location="SU shop"
          icon="drink"
          cost={800}
        />
        <RewardCard
          title="2B pencil"
          location="SU shop"
          icon="pencil"
          cost={250}
        />
      </div>
      <div className=" flex w-full justify-center p-8">
        <p className=" text-zinc-400 ">More to come...</p>
      </div>
    </div>
  );
}

export default TreasureChest;
