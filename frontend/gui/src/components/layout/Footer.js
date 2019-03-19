import React from "react";

export default function Footer() {
  return (
    <div>
      <ul className="nav justify-content-center mt-5 bg-dark">
        <li className="nav-item">
          <a className="nav-link active text-light" href="/landing">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/landing">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/landing">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="/landing"
            tabIndex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}
