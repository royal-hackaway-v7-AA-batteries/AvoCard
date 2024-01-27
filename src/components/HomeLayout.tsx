import { Outlet } from "react-router-dom";
import "./HomeLayout.scss";
import Card from "./Card";
import ActivityRecord from "./ActivityRecord";

const HomeLayout = () => {
  return (
    <>
      <div id="home-container">
        <div id="desktop-left">
          <div id="card-container">
            <Card
              name="Test User"
              issuer="Royal Holloway, University of London"
              balance={1200}
              expiration="23-02-2028"
            />
          </div>
          <div id="account-info">
            <div id="balance-data">
              <div id="balance-container">
                <div>Balance</div>
                <div>£{Intl.NumberFormat().format(1200)}</div>
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
              <ActivityRecord />
            </div>
          </div>
        </div>
        <div id="current-view">
          <div id="view-title">View Title</div>
          <div id="navbar">
            <a href="./">Home</a>
            <a href="./dashboard">Dashboard</a>
            <a href="./account">Account</a>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
