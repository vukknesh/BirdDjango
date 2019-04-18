import React, { Component } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
export default class Topbar extends Component {
  render() {
    return (
      <nav className="nav1">
        <ul className="ul1">
          <li className="li1">
            <Link className="a1" to="/">
              <FormattedMessage id="nav.home" defaultMessage="Home" />
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/about">
              <FormattedMessage id="nav.about" defaultMessage="About" />
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/contact">
              <FormattedMessage id="nav.contact" defaultMessage="Contact" />
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/guide">
              <FormattedMessage id="nav.guide" defaultMessage="Guide" />
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/hotels">
              <FormattedMessage id="nav.hotels" defaultMessage="Hotels" />
            </Link>
          </li>
          <li className="li1">
            <Link className="a1" to="/marketplace">
              <FormattedMessage id="nav.market" defaultMessage="Marketplace" />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
