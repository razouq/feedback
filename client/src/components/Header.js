import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a className="brand-logo">
          Feedback
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a>Login With Google</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
