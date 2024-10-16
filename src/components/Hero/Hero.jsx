import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, im Hogun</h1>
        <p className={styles.description}>
          I am an aspiring pixel art artist. I'm also learning front-end
          development, specifically React. I'm pretty good with graphic editors
          like Photoshop, Ilustrator, and others.
        </p>
        <a href="mailto:phalkevych@ksu.ks.ua" className={styles.contactBtn}>
          Contact ME
        </a>
      </div>
      <img
        src={getImageUrl("hero/mainAvatar.png")}
        alt="Mine avatar"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
