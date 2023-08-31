import React from "react";
import { useCart } from "./CartContext";
import Cart from "./Cart";
import { PersonalInfoForm } from "./PersonalInfoForm"

export const CheckoutView = (props) => {
  const { cart } = useCart();

  return (
    <div className="flex border-solid h-auto w-full border-blue-500 border-8 ">
      {/* Left Column */}
      <div className="flex-1 flex flex-col justify-between p-4 space-y-4">
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
      </div>
    </div>
  );
};
