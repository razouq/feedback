import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Surveys</h4>
      </li>
      <li className="collection-item"><Link to="/surveys/new">Create</Link></li>
      <li className="collection-item"><Link to="/surveys">List</Link></li>
    </ul>
  );
};

export default SideNav;
