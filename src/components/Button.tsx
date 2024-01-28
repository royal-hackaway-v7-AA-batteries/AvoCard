import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClick?: () => void;
  main?: boolean;
  center?: boolean;
}

const Button = ({
  children,
  onClick = () => {},
  main = false,
  center = false,
}: props) => {
  return (
    <div className={` bg-zinc-900 text-gray-100 `}>
      <a
        className={` flex cursor-pointer  ${main ? " w-full p-4  " : " px-4 py-2"} ${center ? " justify-center " : ""} `}
        onClick={onClick}
      >
        {children}
      </a>
    </div>
  );
};

export default Button;
