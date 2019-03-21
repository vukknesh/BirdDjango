import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/main.css";

import anime from "animejs";

export default class Enter extends Component {
  componentDidMount() {
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 750
    });

    tl.add({
      targets: ".dd",
      width: "100%",
      backgroundColor: "lightblue",
      delay: anime.stagger(100)
    });
    tl.add({
      targets: ".dd",
      width: "90%",
      backgroundColor: "rgb(197,197,255)"
    });
    tl.add(
      {
        targets: ".hh1",
        top: "40%",

        opacity: 1,
        duration: 4000
      },
      "-=1600"
    );

    this.nv.addEventListener("nv-enter", this.handleNvEnter);
  }
  componentWillUnmount() {
    this.nv.removeEventListener("nv-enter", this.handleNvEnter);
  }
  handleNvEnter = event => {
    let rotateMe = anime({
      targets: ".sec",
      scaleY: "2",
      scaleX: "2",
      translateX: "40%",
      rotate: "45deg",
      duration: 5000,
      autoplay: false
    });
    rotateMe.play();
  };
  render() {
    return (
      <div className="con">
        <h1
          ref={elem => (this.nv = elem)}
          onMouseOver={this.handleNvEnter}
          className="hh1"
        >
          Bird Watcher.com
        </h1>
        <section className="sec">
          <div className="dd" />
          <div className="dd" />
          <div className="dd" />
          <div className="dd" />
          <div className="dd" />
          <div className="dd" />
          <div className="dd" />
          <div className="dd" />
          <div className="dd" />
          <div className="dd" />
        </section>
      </div>
    );
  }
}
