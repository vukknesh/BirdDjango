import React, { Component } from "react";

export default class Message extends Component {
  render() {
    let textHolder = `What are you thinking, ?`;
    return (
      <div>
        <div className="card mb-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="input-group">
                <div className="input-group-prepend w-25">
                  <img
                    src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
                    alt="..."
                    className="w-100 h-100 rounded-circle"
                  />
                </div>
                <textarea
                  className="form-control"
                  placeholder={textHolder}
                  aria-label="With textarea"
                />
              </div>
            </li>

            <li className="list-group-item justify-content-center">
              <button
                type="button"
                className="btn btn-light  border rounded-pill w-25"
              >
                Photo/Video
              </button>
              <button
                type="button"
                className="btn btn-light border rounded-pill w-25"
              >
                Gif
              </button>
              <button
                type="button"
                className="btn btn-light border rounded-pill w-25"
              >
                Emoji
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
