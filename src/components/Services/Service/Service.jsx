import React from "react";
import styles from "./Service.module.scss";

const Service = (props) => {
  const { title, description } = props;

  return (
    <div className={styles.service__card}>
      <h2 className={styles.service__card__title}>{title}</h2>
      <p className={styles.service__card__description}>{description}</p>
    </div>
  );
};

export default Service
