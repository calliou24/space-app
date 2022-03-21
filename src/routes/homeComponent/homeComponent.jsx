import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { motion } from "framer-motion";

export const pageTransition = {
  in: {
    opacity: 0,
  },
  on: {
    opacity: 1,
  },
};

const buttonAnimation = {
  on: {
    scale: [1, 1.2, 1.2, 1, 1],
  },
};

function Home() {
  return (
    <motion.div
      initial="in"
      animate="on"
      variants={pageTransition}
      id="landing"
      className={styles.home}
    >
      <div className={styles.homeCont}>
        <article className={styles.cont01}>
          <span className={styles.subTitle}>SO, YOUR WANT TO TRAVEL TO</span>
          <h2>SPACE</h2>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </article>
        <article className={styles.cont02}>
          <motion.div
            animate="on"
            variants={buttonAnimation}
            className={styles.exploreBtn}
          >
            <Link to={"destination/Moon"}>Explore</Link>
          </motion.div>
        </article>
        </div>
      </motion.div>
  );
}

export default Home;
