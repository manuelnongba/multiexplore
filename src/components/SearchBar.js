import React, { useState } from "react";

const SearchBar = ({ onFormSubmit, onFormSubmitYou, onFormSubmitGoogle }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(term);
    onFormSubmitYou(term);
    onFormSubmitGoogle(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label></label>
          <input
            style={{ border: "1.5px solid black" }}
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
