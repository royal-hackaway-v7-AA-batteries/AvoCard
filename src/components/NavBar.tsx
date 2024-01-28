import NavBarLink from "./NavBarLink";

const NavBar = () => {
  return (
    <div className=" pointer-events-none absolute left-0 top-0 z-10 flex h-full w-full items-end justify-center p-2 ">
      <div className=" pointer-events-auto flex gap-1 overflow-auto rounded-2xl bg-zinc-700 p-1 ">
        <NavBarLink to="/" text="Market Place" />
        <NavBarLink to="treasure" text="Treasure Chest" />
      </div>
    </div>
  );
};

export default NavBar;
