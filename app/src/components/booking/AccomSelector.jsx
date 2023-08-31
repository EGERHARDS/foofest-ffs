import React from "react";
import { useState } from "react";
import Cart from "./Cart";

function AccomSelector({ onAddToCart }) {
  const [twoPersonCount, setTwoPersonCount] = useState(0);
  const [threePersonCount, setThreePersonCount] = useState(0);
  

  const handleAddToCartClick = () => {
    onAddToCart(twoPersonCount, threePersonCount);
};

  return (
    <div className="flex">
      {/* Two Person Accom Counter */}
      <div className="mr-4">
        <p className="text-sm mb-2">2-person tent</p>
        <button
          onClick={() => setTwoPersonCount(Math.max(0, twoPersonCount - 1))}
          className="mr-2"
        >
          -
        </button>
        <span>{twoPersonCount}</span>
        <button
          onClick={() => setTwoPersonCount(Math.min(8, twoPersonCount + 1))}
          className="ml-2"
        >
          +
        </button>
      </div>

      {/* Three person Accom Counter */}
      <div>
        <p className="text-sm mb-2">3-person tent</p>
        <button
          onClick={() => setThreePersonCount(Math.max(0, threePersonCount - 1))}
          className="mr-2"
        >
          -
        </button>
        <span>{threePersonCount}</span>
        <button
          onClick={() => setThreePersonCount(Math.min(8, threePersonCount + 1))}
          className="ml-2"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCartClick}
        className="flex text-3xl border-solid border-4 w-fit items-center justify-center p-4 "
      >
        Update Cart
      </button>
    </div>
  );
}

export default AccomSelector;
