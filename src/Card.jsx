import { useState } from "react";
import cardcss from "./card.css";
import Cards from "react-credit-cards-2";
import credit from "./image/credit.png";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const Card = () => {
  const [holder, setHolder] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [focus, setFocus] = useState("");
  return (
    <div className="Card">
      <form>
        <h3>Invoice</h3>
        <div id="logo">
          <label>Card Holder</label>
          <img src={credit} />
        </div>

        <input
          type="text"
          name="name"
          placeholder="John Doe"
          onChange={(e) => setHolder(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <label>Card Number</label>
        <input
          type="text"
          name="number"
          placeholder="1234 5678 9012 3456"
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <label>Expiring Date</label>
        <input
          type="text"
          name="expiry"
          placeholder="03/25"
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <label>Security Code</label>
        <input
          type="text"
          name="cvc"
          placeholder="123"
          onChange={(e) => setCvv(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <button>CONFIRM</button>
      </form>
      <Cards
        number={number}
        name={holder}
        expiry={expiry}
        cvc={cvv}
        focused={focus}
      />
    </div>
  );
};

export default Card;
