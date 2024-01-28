import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <div className=" absolute left-0 top-0 h-full w-full ">
      <div className="  ">
        {/* <a href="./" id={LOCATION.pathname === "/" ? "focused-tab" : ""}>
      Market Place
    </a> */}
        <Link to="/" id={pathname === "/" ? "focused-tab" : ""}>
          Market Place
        </Link>
        <Link
          id={pathname.startsWith("/treasure") ? "focused-tab" : ""}
          to="treasure"
        >
          Treasure Chest
        </Link>
        {/* <a
      href="./treasure"
    >
      Treasure Chest
    </a> */}
      </div>
    </div>
  );
};

export default NavBar;
