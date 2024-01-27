import "./Card.scss";

function Card() {
  return (
    <div className="card">
      <div>
        <div id="card-name">Test User</div>
        <div id="card-issuer">
          Issued by Royal Holloway, University of London
        </div>
      </div>
      <div>
        <div id="card-balance-label">Balance</div>
        <div id="card-balance">£1200</div>
      </div>
      <div className="flex flex-row justify-between">
        <div id="card-branding">AvoCard</div>
        <div id="card-expiration">Exp 23-02-2028</div>
      </div>
    </div>
  );
}

export default Card;
