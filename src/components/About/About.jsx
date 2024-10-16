import React from "react";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section>
      <h2>About</h2>
      <div>
        <img src={getImageUrl("about/adoutImage.png")} alt="About image" />
        <ul>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default About;
