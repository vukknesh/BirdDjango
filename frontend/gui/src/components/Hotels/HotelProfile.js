import React, { Component } from "react";
import "./main.css";
import pic from "../MyPage/profile1.jpg";

export default class HotelProfile extends Component {
  render() {
    return (
      <div className="hotel-container">
        <div className="top-content">
          <img src={pic} alt="" className="first-image" />

          <img src={pic} alt="" className="second-image" />
          <img src={pic} alt="" className="third-image" />
          <img src={pic} alt="" className="fourth-image" />
        </div>

        <div className="hotel-content">
          <div className="hotel-info">
            <h1>Hotel 5 estrelas</h1>
            <p>asa norte</p>
            <p>*****</p>
            <p>numero de votos</p>
            <i class="fas fa-home" />
            <p>Address: asa sul q1</p>
            <i class="fas fa-phone-square" />
            <p>telefone: (019)99645499</p>
            <i class="fas fa-info" />
            <p>
              a descricao do hotel aqui Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Hic reiciendis voluptatum quas deleniti
              accusamus culpa facilis ut omnis neque libero?
            </p>
            <div className="commodities">
              <i class="fas fa-wifi" />
              <i class="fas fa-check" />- <i class="fas fa-coffee" />{" "}
              <i class="fas fa-check" />
              <i class="fas fa-igloo" />
              <i class="fas fa-check" />
            </div>
            <div className="comments">
              <div className="comment-owner">
                <img src={pic} alt="" />
                <h5>Leonardo Neshich</h5>
              </div>

              <hr />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus earum explicabo aperiam aut necessitatibus voluptate
                maiores, expedita ipsum id ratione totam quibusdam, a distinctio
                temporibus vitae cumque facilis sit mollitia.
              </p>

              <div className="comment-owner">
                <img src={pic} alt="" />
                <h5>Leonardo Neshich</h5>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus earum explicabo aperiam aut necessitatibus voluptate ma
              </p>
              <div className="comment-owner">
                <img src={pic} alt="" />
                <h5>Leonardo Neshich</h5>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus xplicabo aperiam aut necessitatibus voluptate ma
              </p>
            </div>
          </div>
          <div className="owner-info">
            <div className="hotel-owner">
              <img src={pic} alt="" />
              <h5>Leonardo Neshich</h5>
            </div>
            <div className="personal">
              <p>email</p>
              <p>instagram</p>
              <p>facebook</p>
              <p>wikiaves</p>
              <p>youtube</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
