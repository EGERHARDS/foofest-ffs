import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import Cart from "./Cart";
import { PersonalInfoForm } from "./PersonalInfoForm"

export const CheckoutView = (props) => {
  const { cart } = useCart();
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(59);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);


  return (
    <div className="flex border-solid h-auto w-full border-blue-500 border-8 ">
      {/* Left Column */}
      <div className="flex-1 flex flex-col justify-between p-4 space-y-4">
      <div className="text-red-500 font-bold">
          Time left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        {/* Space for text */}
        <div className="mb-4 text-sm text-black text-left justify-start normal-case p-4">
          During the FooFest Gala, we provide versatile lodging choices to
          amplify your festivity journey. Feel free to carry your personal tent
          and immerse yourself in our lively campsite atmosphere. For those
          prioritizing ease, we have tents already set up, awaiting your
          presence.
          <br></br>
          <br></br>
          Moreover, there's an available Eco Fee to counterbalance the
          festival's ecological footprint. It's all about selecting what aligns
          with your preferences!
        </div>

        {/* Render forms for standard tickets */}
        {Array(cart.standard).fill().map((_, index) => (
          <PersonalInfoForm key={`standard-${index}`} ticketType="Standard" index={index + 1} />
        ))}

        {/* Render forms for elite tickets */}
        {Array(cart.elite).fill().map((_, index) => (
          <PersonalInfoForm key={`elite-${index}`} ticketType="Elite" index={index + 1} />
        ))}
      </div>

      {/* Right Column */}
      <div className="flex-1 p-4">
        <Cart cart={cart} /> {/* Display the cart information */}
        {/* Payment Fields */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Payment Details</h3>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Card Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className="p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="p-2 w-full"
          />
        </div>
      </div>
    </div>
  );
};