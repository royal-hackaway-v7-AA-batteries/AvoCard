import "./Card.scss";

function Card({
  name,
  issuer,
  balance,
  expiration,
}: {
  name: string;
  issuer: string;
  balance: number;
  expiration: string;
}) {
  return (
    <div className="card">
      <div>
        <div id="card-name">{name}</div>
        <div id="card-issuer">Issued by {issuer}</div>
      </div>
      <div>
        <div id="card-balance-label">Balance</div>
        <div id="card-balance">£{Intl.NumberFormat().format(balance)}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div id="card-branding">AvoCard</div>
        <div id="card-expiration">Exp {expiration}</div>
      </div>
    </div>
  );
}

export default Card;
