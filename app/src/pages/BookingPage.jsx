import React, { useEffect, useState } from "react";
import { getAvailableSpots } from "../api";
import { TicketView } from "../components/booking/TicketView";
import { AccommodationView } from "../components/booking/AccommodationView";
import { CheckoutView } from "../components/booking/CheckoutView";
import { PRICES } from "../components/booking/Constants";


import "./pages.css";

const bookingSteps = [
  { name: "tickets", view: TicketView },
  { name: "accommodation", view: AccommodationView },
  { name: "checkout", view: CheckoutView },
];

export const BookingPage = () => {
  const [availableSpots, setAvailableSpots] = useState([]);

  const [cart, setCart] = useState({
    standard: 0,
    elite: 0,
    twoperson: 0,
    threeperson: 0,
    bookingFee: PRICES.bookingFee
  });
  

  const [step, setStep] = useState(0);

  useEffect(() => {
    getAvailableSpots()
      .then((response) => response.json())
      .then((data) => {
        setAvailableSpots(data);
      });
  }, []);

  const currentStep = bookingSteps[step];

  return (
    <div className="flex flex-col h-screen w-screen p-4">
      <div className="text-blue-500 text-transform: capitalize cursor-pointer text-6xl font-semibold">
        {currentStep.name}
      </div>
      {currentStep.view && (
        <currentStep.view cart={cart} setCart={setCart} />
      )}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => {
          if (step < bookingSteps.length - 1) {
            setStep(step + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default BookingPage;
