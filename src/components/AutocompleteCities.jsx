import React, { useState } from "react";

function AutocompleteCity({ suggestions }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() !== "") {
      const filtered = suggestions.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleClick = (city) => {
    setInputValue(city);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div style={{ position: "relative", width: "250px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "8px",
          fontSize: "14px",
          boxSizing: "border-box",
        }}
        placeholder="Type to search..."
      />

      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "38px",
            left: 0,
            right: 0,
            border: "1px solid #ccc",
            background: "#fff",
            listStyleType: "none",
            margin: 0,
            padding: 0,
            maxHeight: "150px",
            overflowY: "auto",
            zIndex: 1000,
          }}
        >
          {filteredSuggestions.map((city, index) => (
            <li
              key={index}
              onClick={() => handleClick(city)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#f0f0f0")}
              onMouseLeave={(e) => (e.target.style.background = "#fff")}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutocompleteCity;
