import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <NavLink onClick={onClick} className={className} to={href}>
      {children}
    </NavLink>
  );
};

export default Link;
