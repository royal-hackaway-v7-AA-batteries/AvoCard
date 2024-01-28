import { Link, useLocation } from "react-router-dom";

interface props {
  to: string;
  text: string;
}

const NavBarLink = ({ to, text }: props) => {
  const { pathname } = useLocation();

  return (
    <Link
      className={` ${pathname === to || pathname === `/${to}` ? "bg-zinc-900" : ""} rounded-xl px-8 py-4 text-gray-100 `}
      to={to}
    >
      <p className="  text-center ">{text}</p>
    </Link>
  );
};

export default NavBarLink;
