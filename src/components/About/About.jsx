import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/chest.svg")}
          alt="About image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontEnd.svg")} alt="Pixelart key" />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>I study front-end development, now I'm learning React</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/pixelArt.svg")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Pixelarts</h3>
              <p>I can draw a little in the pixel art style</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graphicDesign.svg")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Graphic editors</h3>
              <p>
                I am proficient in graphic editors such as Photoshop Illustrator
                and others
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
