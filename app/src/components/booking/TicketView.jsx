import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const TicketView = (props) => {
  return (
    <button
      className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 
    text-center text-m font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
    focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-32"
      onClick={() => {
        props.setTickets(1);
      }}
    >
      Add to cart
    </button>
  );
};
