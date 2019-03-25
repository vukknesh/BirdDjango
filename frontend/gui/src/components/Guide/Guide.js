import React, { Component } from "react";
import GuideUser from "./GuideUser";
import { connect } from "react-redux";

class Guide extends Component {
  render() {
    return (
      <div className="container mt-3 d-flex">
        <div className="w-25 vh-100 bg-light">
          <div className="card mb-3 bg-warning">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Destination/name of the guider
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="City / State / Country"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Another label</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Another input"
                  />
                </div>
              </form>
              <a href="#" className="btn btn-primary">
                Find Guide
              </a>
            </div>
          </div>
        </div>
        <div className="w-75">
          <GuideUser />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Guide);
