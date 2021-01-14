import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const renderContent = () => {
    switch (auth) {
      case null:
        return null;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <>
            <li key="paymenys">
              <Payments />
            </li>
            <li key="credits" style={{margin: '0 10px'}}>Credits: {auth.credits}</li>
            <li key="logout">
              <a href="/api/logout">Logout</a>
            </li>
          </>
        );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper container">
        <Link className="brand-logo" to={auth ? "/surveys" : "/"}>
          Feedback
        </Link>
        <ul className="right hide-on-med-and-down">{renderContent()}</ul>
      </div>
    </nav>
  );
};

export default Header;
