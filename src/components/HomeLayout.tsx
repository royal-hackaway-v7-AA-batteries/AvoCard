import { Outlet } from "react-router-dom";
import "./HomeLayout.scss";
import Card from "./Card";

const HomeLayout = () => {
  return (
    <>
      <div id="home-container">
        <div id="desktop-left">
          <div id="card-container">
            <Card />
          </div>
          <div id="account-info">Account Info</div>
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
