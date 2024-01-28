import "./Card.scss";
import currencyLogoLight from "../../public/assets/currency_light.svg";
import AvoCardLogo from "../../public/assets/AvoCard_Logo_light.svg";

function Card({
  name,
  issuer,
  balance,
  email,
  expiration,
}: {
  name: string;
  issuer: string;
  balance: number;
  email: string | null;
  expiration: string;
}) {
  return (
    <div className="card text-gray-50 ">
      <div>
        <div id="card-name">{name}</div>
        <div id="card-issuer">Issued by {issuer}</div>
      </div>
      <div>
        <div id="card-balance-label">{email || "Balance"}</div>
        <div id="card-balance">
          <img src={currencyLogoLight} />
          {Intl.NumberFormat().format(balance)}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <img id="avocard-logo" src={AvoCardLogo} draggable={false} />
        <div id="card-expiration">Exp {expiration}</div>
      </div>
    </div>
  );
}

export default Card;
