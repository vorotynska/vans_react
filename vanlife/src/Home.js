import React from "react";
import { Link } from "react-router-dom"

export default function Home() {
    return(
        <div className="home-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movemen
                make your perfect roud trip
            </p>
            <Link to="vans">Find your van</Link>
        </div>
    )
};