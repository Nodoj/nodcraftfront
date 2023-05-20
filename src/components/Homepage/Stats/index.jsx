import React, { useState, useEffect, useRef } from "react";
import styles from "./Stats.module.scss";
import { useInView } from "react-intersection-observer";

const useAnimatedNumber = (target, shouldAnimate) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (shouldAnimate) {
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / 2000, 1);
        setValue(Math.floor(progress * target));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }, [shouldAnimate, target]);

  return value;
};

export const Stats = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const animatedItProjects = useAnimatedNumber(100, inView);
  const animatedWebProjects = useAnimatedNumber(12, inView);
  const animatedCompletedTasks = useAnimatedNumber(2800, inView);
  const animatedYearsOfExperience = useAnimatedNumber(10, inView);

  return (
    <section id="stats" className={styles.root}>
      <h1>WHAT HAVE I'VE DONE😱</h1>
      <div ref={ref} className={styles.about}>
        <div className={styles.statusWrapper}>
          <div className={styles.content}>
            <h2>
              IT Projects<br />
              <span>{animatedItProjects}+</span>
            </h2>
          </div>
          <div className={styles.content}>
            <h2>
              Web Projects<br />
              <span>{animatedWebProjects}+</span>
            </h2>
          </div>
          <div className={styles.content}>
            <h2>
              Completed Tasks<br />
              <span>{animatedCompletedTasks}+</span>
            </h2>
          </div>
          <div className={styles.content}>
            <h2>
              Years of Experience<br />
              <span>{animatedYearsOfExperience}+</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
