import '../styles/Google.css';
import React from 'react';

const Google = ({ googleResults }) => {
  if (!googleResults) {
    return <div>No results found</div>;
  }
  const renderedGoogleResults = googleResults.map((googleResult) => {
    return (
      <div
        style={{ borderBottom: '0.5px solid white', padding: '15px' }}
        key={googleResult.title}
        className="item"
      >
        <div className="content">
          <span
            dangerouslySetInnerHTML={{ __html: googleResult.htmlFormattedUrl }}
          ></span>
          <a
            className="header"
            dangerouslySetInnerHTML={{ __html: googleResult.htmlTitle }}
            href={googleResult.link}
          ></a>
          <span>{googleResult.snippet}</span>
        </div>
      </div>
    );
  });

  return <div className="ui celled list">{renderedGoogleResults}</div>;
};

export default Google;
