import React from 'react';
import styles from './Services.module.scss';

export const Services = () => {


  return (
    <>
      <section className={styles.root}>
        
        <div className={styles.servicesWrapper}>
          <h1 className={styles.__title}>Our Services</h1>
          <div className={styles.__grid}>
         
            <div className={styles.service__card}>
              <h2 className={styles.service__card__title}>Graphic Design</h2>
              <p className={styles.service__card__description}>
                Our graphic design services include branding, logo design, and marketing collateral such as brochures and flyers.
              </p>
            </div>
            <div className={styles.service__card}>
              <h2 className={styles.service__card__title}>Web Development</h2>
              <p className={styles.service__card__description}>
                Our web development services include website design and development, e-commerce development, and website maintenance and support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


