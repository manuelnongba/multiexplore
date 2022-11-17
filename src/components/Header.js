import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Wikipedia
      </Link>
      <Link href="/youtube" className="item">
        Youtube
      </Link>
      <Link href="/google" className="item">
        Google
      </Link>
    </div>
  );
};

export default Header;
