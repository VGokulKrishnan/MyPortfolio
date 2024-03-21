import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gokul Krishnan</h1>
        <p className={styles.description}>
          I'm a front-end developer with experience using React. Recent graduate with excellent research, technical
          and problem-solving skills, able to learn new concepts quickly.
        </p>
        <a href="mailto:igkgokul1011@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/iggk.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
