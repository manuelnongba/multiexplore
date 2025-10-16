import '../styles/SearchBar.css';
import React, { useState } from 'react';

const SearchBar = ({
  onFormSubmit,
  onFormSubmitYouTube,
  onFormSubmitGoogle,
}) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(term);
    onFormSubmitYouTube(term);
    onFormSubmitGoogle(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label></label>
          <input
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
