import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Button = ({ children }: props) => {
  return (
    <div className=" bg-zinc-900 text-gray-100">
      <a className=" px-4 py-2 ">{children}</a>
    </div>
  );
};

export default Button;
