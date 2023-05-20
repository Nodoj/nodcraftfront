import React, { useRef, useEffect } from 'react';
import styles from './Aboutme.module.scss'

export const Aboutme = () => {
  const myRef = useRef()

  useEffect(() => {
    console.log('myRef', myRef.current)
  }, [])

  return (
    <section id="stats" className={styles.root}>

      <h1>WHO AM I?🤔</h1>
      <div ref={myRef} className={styles.about}>

        <div className={styles.aboutWrapper}>
          <div className={styles.content}>

            <p>
              Hi my name is Nodar Jmukhadze,
              I was born in Tbilisi in 1992 and spent some of my childhood years in Russia before moving back to Georgia. From a young age, I had a natural curiosity and fascination with computers and technology. As I grew up, my interest in technology only deepened, and I knew that I wanted to pursue a career in IT.
            </p>
            <br />
            <p>
              Over the past decade, I have gained extensive experience in the IT industry, having successfully completed various projects. I have worked on IT infrastructure, network installation and configuration, CCTV, virtualization, VoIP, NAS, Firewalls, and 3D planning projects, among others. Each project was challenging in its own way, but it was the satisfaction of solving complex IT issues that made me love my job.
            </p>
            <br />
            <p>
              My passion for graphic design has always been present, and I found ways to integrate it into my IT work and personal projects including Training materials, UI/UX Design, Business identity, Logo, Illustration, 3D Planning.As a developer I have  4 year experience with WordPress and have recently started learning how to code in JavaScript and use ReactJS, SAAS, TailWindCss, Express, mongoose, MongoDB, Postman among others, successfully completed 3 month QA manual training to better understand the DevOps circle .
            </p>
            <br />
            <p>
              Working in IT has allowed me to continuously learn and develop new skills while also pursuing my passion for graphic design. I look forward to continuing to work in this dynamic field and seeing what new challenges and opportunities lie ahead.
            </p>

          </div>
        </div>

      </div>
    </section>

  )
}
