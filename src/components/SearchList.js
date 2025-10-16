import '../styles/SearchList.css';
import React from 'react';

const SearchList = ({ results }) => {
  if (!results) {
    return <div>Loading...</div>;
  }
  if (!results?.length) {
    return <div>No results found</div>;
  }
  const renderedResults = results.map((result) => {
    return (
      <div
        key={result.pageid}
        style={{ borderBottom: '0.5px solid white', padding: '15px' }}
        className="item"
      >
        <div className="content">
          <a
            className="header"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            {result.title}
          </a>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* {result.snippet} */}
        </div>
      </div>
    );
  });

  return <div className="ui celled list">{renderedResults}</div>;
};

export default SearchList;
