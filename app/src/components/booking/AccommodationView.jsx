import React from "react";
import Cart from "./Cart";
import AccomSelector from "./AccomSelector";
import { useCart } from "./CartContext";

export const AccommodationView = (props) => {
  const { cart, setCart } = useCart();

  const handleAddToCart = (twoperson, threeperson) => {
    setCart(prevCart => ({
      ...prevCart,
      twoperson,
      threeperson
    }));
  };

  return (
    <div className="flex border-solid h-full w-full border-blue-500 border-8 ">
      {/* Left Column */}
      <div className="flex-1 flex flex-col justify-between p-4">
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
        {/* Space for buttons */}
        <AccomSelector onAddToCart={handleAddToCart} />
      </div>

      {/* Right Column */}
      <div className="flex-1 p-4">
        <Cart cart={cart} /> {/* Use the Cart component here */}
      </div>
    </div>
  );
};
