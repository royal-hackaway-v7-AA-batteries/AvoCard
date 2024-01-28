import CurrencyValue from "./CurrencyValue";
import { FaEdit, FaTimes } from "react-icons/fa";

interface props {
  product: { name: string; price: number; src: string };
}

const MyListCard = ({ product }: props) => {
  return (
    <div className=" flex w-full items-center justify-between ">
      <div className=" flex items-center gap-2 ">
        <img
          src={product.src}
          className=" h-28 w-[25dvw] min-w-48 max-w-80 object-cover "
        />
        <div>
          <p>{product.name}</p>
          <CurrencyValue value={product.price} />
        </div>
      </div>

      <div className=" flex gap-4">
        <FaEdit />
        <FaTimes />
      </div>
    </div>
  );
};

export default MyListCard;
