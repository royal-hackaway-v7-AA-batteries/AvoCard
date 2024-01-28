import "./HomeLayout.scss";
import Card from "./Card";
import NavBar from "./NavBar";

import { Outlet } from "react-router-dom";
import AccountDetail from "./AccountDetail";

const HomeLayout = ({
  username,
  email,
  children,
}: {
  username: string | null;
  email: string | null;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <div id="home-container">
        <div className=" min-w-72 max-w-80 " id="desktop-left">
          <div id="card-container">
            <Card
              name={username || "User Not Found!"}
              issuer="Royal Holloway, University of London"
              email={email}
              balance={3700}
              expiration="2028-02-23"
            />
          </div>
          <AccountDetail logOut={children} />
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
