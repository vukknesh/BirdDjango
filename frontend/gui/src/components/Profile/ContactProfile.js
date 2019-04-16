import React, { Component } from "react";
import { connect } from "react-redux";

class ContactProfile extends Component {
  render() {
    const { first_name, last_name, email, about_you } = this.props;
    return (
      <div>
        {this.props.profile ? (
          <div>
            <div className="text-center">
              <h1>Contato</h1>
            </div>
            <div className="ml-3 mt-5">
              <p>{email}</p>
              <p>Telefone</p>
              <hr />
              <h4 className="text-center">Sobre {first_name}:</h4>
              <p className="mt-5">{about_you}</p>
            </div>
            <div className="mb-5">
              <button>Mandar Menssagem</button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profiles.profile
});
export default connect(mapStateToProps)(ContactProfile);
