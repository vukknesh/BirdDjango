import React, { Component } from "react";

export default class RigthMenu extends Component {
  render() {
    return (
      <div
        className="container
        d-flex flex-column s-top"
      >
        <div className="mb-4 mr-5 ">
          <div className="card">
            <div className="card-header font-weight-bold">Users</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
        <div className="mb-4  mr-5">
          <div className="card">
            <div className="card-header font-weight-bold">Advertise</div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81W14n4ouIL._SL1500_.jpg"
              className="card-img-top"
              style={{
                width: "200px",
                height: "200px",
                marginLeft: "80px"
              }}
              alt="..."
            />

            <div className="card-body">
              <p className="card-text">
                Some quick example SPONSOR on the card title and make up the
                bulk of the card's content.
              </p>
              <a href="#" className="text-decoration-none">
                Link to product
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="card mb-3  mr-5">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src="https://content.presspage.com/uploads/1763/1920_year-of-the-bird-george-grall.jpg?10000"
                  className="card-img rounded-circle mt-3 ml-2"
                  alt="..."
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "250px"
                  }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Did You Know?</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted mb-5">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
