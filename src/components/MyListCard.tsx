import Button from "./Button";
import CurrencyValue from "./CurrencyValue";

interface props {
  product: { name: string; price: number };
}

const MyListCard = ({ product }: props) => {
  return (
    <div className=" flex w-full items-center justify-between ">
      <div className=" flex items-center gap-2 ">
        <img
          src="https://source.unsplash.com/random/?object"
          className=" h-20 w-40 object-cover "
        />
        <div>
          <p>{product.name}</p>
          <CurrencyValue value={product.price} />
        </div>
      </div>
      <Button>x</Button>
    </div>
  );
};

export default MyListCard;
