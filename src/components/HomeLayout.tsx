import { Outlet } from "react-router-dom";
import "./HomeLayout.scss";
import Card from "./Card";
import ActivityRecord from "./ActivityRecord";
import currencyLogoDark from "../../public/assets/currency_dark.svg";
import NavBar from "./NavBar";
import ActionButton from "./ActionButton";

const HomeLayout = () => {
  return (
    <>
      <div id="home-container">
        <div id="desktop-left">
          <div id="card-container">
            <Card
              name="Kenny Oliver"
              issuer="Royal Holloway, University of London"
              balance={3700}
              expiration="2028-02-23"
            />
          </div>
          <div className=" relative " id="account-info">
            <div id="balance-data">
              <div id="balance-container">
                <div>Balance</div>
                <div>
                  <img src={currencyLogoDark} />
                  {Intl.NumberFormat().format(3700)}
                </div>
              </div>
              <div id="upcoming-container">
                <div>Upcoming / Due</div>
                <div id="upcoming-fraction">
                  <div>
                    {140} / {8}
                  </div>
                  <div>Tasks</div>
                </div>
              </div>
            </div>
            <div id="activity-summary">
              <div>Activity</div>
              <ActivityRecord
                name="Friend"
                description="Breakfast errand"
                timestamp="Today, 8:30 AM"
                balanceChange="+13"
              />
            </div>
            <ActionButton content={["Send", "Recieve"]} />
            {/* <div id="send-receive">
              <div>Send</div>
              <div>|</div>
              <div>Recieve</div>
            </div> */}
          </div>
        </div>
        <div id="current-view" className=" relative ">
          <NavBar />
          <div className=" relative h-full w-full overflow-y-auto pb-20 ">
            {/* <h1 className=" font-bold ">
              {LOCATION.pathname == "/" ? "Market Place" : "Treasure Chest"}
            </h1> */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
