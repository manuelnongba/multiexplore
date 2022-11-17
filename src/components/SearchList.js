import React from "react";

const SearchList = ({ results }) => {
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
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
