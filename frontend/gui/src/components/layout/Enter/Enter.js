import React, { Component } from "react";

import "./css/main.css";

import anime from "animejs";

export default class Enter extends Component {
  state = {
    active: false
  };
  componentDidMount() {
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 750
    });

    tl.add({
      targets: ".dd",
      width: "100%",

      delay: anime.stagger(100)
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
    // let rotateMe = anime({
    //   targets: ".sec",

    //   scaleY: "2",
    //   scaleX: "2",
    //   translateX: "40%",
    //   rotate: "45deg",
    //   duration: 5000,
    //   autoplay: false
    // });
    let rotateMe2 = anime({
      targets: ".hh1",

      left: "33%",
      duration: 5000,
      autoplay: false
    });
    let rotateMe3 = anime({
      targets: ".pp1",
      opacity: 1,

      left: "20%",
      duration: 4000,
      autoplay: false
    });

    rotateMe2.play();
    rotateMe3.play();
    this.setState({ active: true });
  };
  render() {
    return (
      <div className="con">
        <h1
          ref={elem => (this.nv = elem)}
          onMouseOver={this.handleNvEnter}
          className={this.state.active ? "hh1 hh2" : "hh1"}
        >
          Murucututu.com.br
        </h1>
        <p className={this.state.active ? "pp1 pp2" : "pp1"}>
          Um site criado pra Watchers planejar melhor seu click perfeito!
        </p>
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
