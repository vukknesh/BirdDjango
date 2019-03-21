import React, { Component } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

export default class Topbar extends Component {
  render() {
    return (
      <nav className="nav1">
        <ul className="ul1">
          <li className="li1">
            <Link className="a1" to="/enter">
              Home
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/enter">
              About
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/enter">
              Contact
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/enter">
              Guide
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/enter">
              Hotels
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
