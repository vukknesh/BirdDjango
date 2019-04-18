import React from "react";
import owly from "./images.png";
import "../Auth/Login.css";

export default function Footer() {
  return (
    <div className="footer">
      <h4>FIQUE CONECTADO</h4>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active text-light" href="/login">
            <img
              className="rounded"
              src={owly}
              alt=""
              style={{
                width: "20px",
                heigth: "20px"
              }}
            />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-light"
            href="https://www.instagram.com/murucututu.com.br/"
            target="_blank"
          >
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-light"
            target="_blank"
            href="https://www.wikiaves.com.br/perfil_gneshich"
          >
            <i className="fas fa-dove" />
          </a>
        </li>
      </ul>
    </div>
  );
}
