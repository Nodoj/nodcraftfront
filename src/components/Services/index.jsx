import React from 'react';
import styles from './Services.module.scss';
import serviceGD from '../../assets/images/serviceGD.png'
import serviceIT from '../../assets/images/serviceIT.png'
import serviceDev from '../../assets/images/serviceDev.png'


export const Services = () => {


  return (
    <>
      <section className={styles.root}>

        <div className={styles.servicesWrapper}>
          <h1 className={styles.__title}>Our Services</h1>
          <div className={styles.__grid}>

            <div className={styles.service__card}>
              <img src={serviceGD} alt="serviceGD" />
              <h2 className={styles.service__card__title}>Graphic Design</h2>
              <p className={styles.service__card__description}>
                Our graphic design services include branding, logo design, and marketing collateral such as brochures and flyers.
              </p>
              <ul>
                <li><span>◈</span> IT Consulting</li>
                <li><span>◈</span>  Cybersecurity</li>
                <li><span>◈</span>  DevOps Services</li>
                <li><span>◈</span>  IT Project Management</li>
                <li><span>◈</span>  Database Management</li>
                <li><span>◈</span>  Network Design and Implementation</li>
              </ul>
            </div>
            <div className={styles.service__card}>
              <img src={serviceDev} alt="serviceDev" />
              <h2 className={styles.service__card__title}>Web Development</h2>
              <p className={styles.service__card__description}>
                Our web development services include website design and development, e-commerce development, and website maintenance and support.
              </p>
              <ul>
                <li><span>◈</span> IT Consulting</li>
                <li><span>◈</span>  Cybersecurity</li>
                <li><span>◈</span>  DevOps Services</li>
                <li><span>◈</span>  IT Project Management</li>
                <li><span>◈</span>  Database Management</li>
                <li><span>◈</span>  Network Design and Implementation</li>
              </ul>
            </div>
            <div className={styles.service__card}>
              <img src={serviceIT} alt="serviceIT" />
              <h2 className={styles.service__card__title}>IT Services</h2>
              <p className={styles.service__card__description}>
                We offers a range of IT services that will help you to manage your technology infrastructure efficiently. Our IT services include:
              </p>
              <ul>
                <li><span>◈</span> IT Consulting</li>
                <li><span>◈</span>  Cybersecurity</li>
                <li><span>◈</span>  DevOps Services</li>
                <li><span>◈</span>  IT Project Management</li>
                <li><span>◈</span>  Database Management</li>
                <li><span>◈</span>  Network Design and Implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


