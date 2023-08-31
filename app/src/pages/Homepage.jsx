import React, { useEffect, useState } from "react";
import { getAvailableSpots } from "../api";
import { Link } from 'react-router-dom';

const Homepage = () => {
    return ( 
        <div>
            Welcome to <img src="app/public/logo-foo.png" alt="festival-logo"></img>
            <button>Create a booking</button>
        </div>
     );
}
 
export default Homepage;