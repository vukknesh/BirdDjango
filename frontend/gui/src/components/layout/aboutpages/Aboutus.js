import React from "react";
import owly from "../owly.png";
import "../Enter/css/main.css";

export default function Aboutus() {
  return (
    <div className="about-container">
      <div className="missao">
        <div className="valores">
          <h3>Missão, visão e valores do Murucututu.com</h3>
          <p>MISSÃO</p>
          <ul>
            <li>
              Estimular e dar suporte à atividade de observação de aves no
              Brasil;
            </li>
            <li>
              Democratizar o acesso às informações sobre as aves do Brasil;
            </li>
            <li>
              Coletar informações úteis para o estudo e a preservação das aves.
            </li>
          </ul>
          <p>VISÃO</p>
          <ul>
            <li>Ser o site de ornitologia mais acessado do mundo;</li>
            <li>
              Ser reconhecido como base de dados importante e confiável para o
              estudo e preservação das aves;
            </li>
            <li>
              Ter pelo menos um registro em território brasileiro de todas as
              espécies de aves do Brasil.
            </li>
          </ul>
          <p>VALORES</p>
          <ul>
            <li>Amor às aves e à Natureza;</li>
            <li>Valorização da vida e da liberdade;</li>
            <li>Educação, ética e credibilidade;</li>
          </ul>
        </div>
        <div className="imagem-murucututu">
          <img src={owly} alt="" />
        </div>
      </div>
    </div>
  );
}
