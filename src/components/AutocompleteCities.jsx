import React, { useState } from "react";

function AutoCompleteCities({ suggestions }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = suggestions.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (city) => {
    setInputValue(city);
    setShowSuggestions(false);
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <label htmlFor="city-search" style={{ display: "block", marginBottom: "5px" }}>
        Search cities of India:
      </label>
      <input
        id="city-search"
        type="text"
        value={inputValue}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", fontSize: "14px" }}
      />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: "5px",
            border: "1px solid #ccc",
            borderTop: "none",
            maxHeight: "150px",
            overflowY: "auto",
          }}
        >
          {filteredSuggestions.map((city, index) => (
            <li
              key={index}
              style={{
                padding: "5px",
                cursor: "pointer",
              }}
              onClick={() => handleSuggestionClick(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutoCompleteCities;
