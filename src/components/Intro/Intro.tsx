import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div>
      <img src="public/bookgif.gif" alt="Animated book logo"></img>
      <div className="head">
        <span className="intro" style={{ width: "50%", float: "left" }}>
          <b>Hey, I'm Hamza</b>
        </span>
        <span
          className="links"
          style={{ width: "50%", float: "right", textAlign: "right" }}
        >
          <a href="https://github.com/hamza-szd" target="_blank">
            [github]
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/hamza-s-05101a219/"
            target="_blank"
          >
            [linkedin]
          </a>{" "}
        </span>
      </div>
      <hr />
      <div className="desc">
        <p>
          I'm currently studying towards a B.S. in Computer Science and a B.A in
          Economics (on the Finance track) @{" "}
          <span className="glow-brown">
            <a href="https://www.brown.edu/">Brown.</a>
          </span>
        </p>

        <p>
          In my free time I like to climb rocks, compete in long-distance races,
          snowboard, and play hockey. I'd love to chat - contact me at any of my
          socials here!
        </p>
      </div>
    </div>
  );
}

export default Intro;
