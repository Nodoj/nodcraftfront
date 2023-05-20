import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import profPic from "../../../assets/images/profpic.png"
import itPic from "../../../assets/images/serviceIT.png"
import gdPic from "../../../assets/images/serviceGD.png"
import devPic from "../../../assets/images/serviceDev.png"
// import CanvasBackground from "./CanvasBackground";


export const Hero = () => {

  function Pattern() {
    const stripes = [];

    for (let i = 1; i <= 105; i++) {
      stripes.push(<div key={`${styles.stripe}-${i}`} className={`${styles.stripe} ${styles.stripe}-${i}`} />);
    }

    return (
      <div className={styles.Pattern}>
        <div className={styles.horizontal}>{stripes}</div>
        <div className={styles.vertical}>{stripes}</div>
      </div>
    );
  }

  return (
    <>
    {/* <CanvasBackground className={styles.canvas}/> */}
      <div className={styles.root}>
        <div className={styles.hero__container}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 5,
              delay: 2.5,
            }}
          >
            <Pattern />
          </motion.div>
          <div className={styles.hero__contwrapper}>
            <div className={styles.hero__text}>
              <motion.div
                initial={{ y: 200, opacity: 0, rotate: -15 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{
                  duration: 2,
                  delay: 0.7,
                }}
              >

                <h3>Hello
                  <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: 0.9,
                  }}
                  >
                    <span>,</span>
                  </motion.div>
                  <motion.div
                  initial={{ y: 100, opacity: 0, rotate: 30 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{
                    duration: 3,
                    delay: 0.7,
                  }}
                  >
                    <span>I'm</span>
                  </motion.div>
                </h3>

              </motion.div>

              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 4,
                  delay: 2,
                }}
              >
                <h1>Nodar Jmukhadze</h1>

              </motion.div>
            </div>




            <motion.div
              className={styles.hero__profPic}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                delay: 1.5,
              }}>
              <img src={profPic} alt="NJ" />
            </motion.div>


          </div>

          <div className={styles.hero__images}>
            <motion.div
              className={styles.hero__pic}
              initial={{ y: 500, scale: 0.7 }}
              animate={{ y: 0, scale: 0.7 }}
              transition={{
                duration: 2.5,
                delay: 3,
              }}>
              <img src={gdPic} />
              <span className={styles.imgTitle}>
                Graphic Designer
              </span>

            </motion.div>

            <motion.div
              className={styles.hero__picTwo}
              src={itPic}
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              transition={{
                duration: 2.5,
                delay: 2.8,
              }}>
              <img src={itPic} />
              <span className={styles.imgTitle}>
                IT Manager
              </span>
            </motion.div>

            <motion.div
              className={styles.hero__picThree}
              initial={{ y: 500, scale: 0.7 }}
              animate={{ y: 0, scale: 0.7 }}
              transition={{
                duration: 2,
                delay: 2.5,
              }} >
              <img src={devPic} />
              <span className={styles.imgTitle}>
                Web Developer
              </span>
            </motion.div>
          </div>
        </div>

      </div>
    </>
  );
};