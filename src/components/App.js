
import React from "react";
import './../styles/App.css';
import AutocompleteCities from "./AutocompleteCities";

const citySuggestions = [
  "Bangalore",
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat",
];
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>Search cities of India:</h3>
      <AutocompleteCities suggestions={citySuggestions} />
    </div>
    </div>
  )
}

export default App
