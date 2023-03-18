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
              We offers a range of graphic design services that will help you to create a visual identity for your brand. Our graphic design services include
              </p>
              <ul>
                <li><span>◈</span>  UX/UI Design</li>
                <li><span>◈</span>  Digital Design</li>
                <li><span>◈</span>  Packaging Design</li>
                <li><span>◈</span>  Advertising Design</li>
                <li><span>◈</span>  Social Media Design</li>
                <li><span>◈</span>  Branding and Logo Design</li>
              </ul>
            </div>
            <div className={styles.service__card}>
              <img src={serviceDev} alt="serviceDev" />
              <h2 className={styles.service__card__title}>Web Development</h2>
              <p className={styles.service__card__description}>
              We offers a range of web development services that help you to create a strong online presence. Our web development services include
              </p>
              <ul>
                <li><span>◈</span>  Front-end Development</li>
                <li><span>◈</span>  Back-end Development</li>
                <li><span>◈</span>  E-commerce Development</li>
                <li><span>◈</span>  API Development</li>
                <li><span>◈</span>  Website Maintenance and Support</li>
                <li><span>◈</span>  Website Testing and Optimization</li>
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


