import React, { Component } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

export default class Topbar extends Component {
  render() {
    return (
      <nav className="nav1">
        <ul className="ul1">
          <li className="li1">
            <Link className="a1" to="/">
              Home
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/about">
              About
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/contact">
              Contact
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/guide">
              Guide
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/hotels">
              Hotels
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/marketplace">
              Marketplace
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
