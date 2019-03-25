import React, { Component } from "react";

import profilepic1 from "./profile1.jpg";
import { connect } from "react-redux";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    this.setState({
      user: this.props.user
    });
  }

  render() {
    if (this.state.user) {
      var name = this.state.user.name;
      var email = this.state.user.email;
      var pic = this.state.user.image;
      console.log(pic);
    }

    return (
      <div className="w-100">
        <div className="card">
          <img
            style={{ width: "150px", marginRight: "150px" }}
            src="http://localhost:8000/media/users/beograd_fKGF64k.jpg"
            className="card-img-top rounded-circle mx-auto"
            alt="Picture"
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{email}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <button
              type="button"
              className="btn btn-secondary btn-block"
              data-toggle="modal"
              data-target="#exampleModalScrollable"
            >
              View Profile
            </button>

            <div
              className="modal fade"
              id="exampleModalScrollable"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalScrollableTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-scrollable"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id="exampleModalScrollableTitle"
                    >
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio quasi doloremque temporibus alias nemo nostrum nulla
                    adipisci cum laboriosam minus. Aliquid suscipit hic ducimus
                    eaque ea. Similique reprehenderit officia voluptas! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                    dolorum soluta cupiditate odio similique minima asperiores
                    autem quia voluptas non, iure et natus ducimus id doloremque
                    dignissimos quos saepe at. lorem Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Dolorum, perferendis sequi
                    ipsa dolor iste alias totam odio libero aliquid ducimus,
                    provident maiores fugit ut. Sunt laboriosam temporibus amet
                    commodi debitis!
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user
});
export default connect(mapStateToProps)(MyProfile);
