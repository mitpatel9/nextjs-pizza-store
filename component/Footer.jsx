import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <Image src="/img/bg.png" fill alt="" style={{objectFit:'cover'}}   sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
    </div>
    <div className={styles.item}>
      <div className={styles.card}>
        <h2 className={styles.motto}>
          OH YES, WE DID.THE MIT PIZZA, WELL BAKED SLICE OF PIZZA.
        </h2>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
        <p className={styles.text}>
          100 R. Don Road #304.
          <br /> Ahemdabad, 380008
          <br /> (602) 867-1010
        </p>
        <p className={styles.text}>
          2356 K. Ranip Rd #235.
          <br /> Ahemdabad, 380008
          <br /> (602) 867-1011
        </p>
        <p className={styles.text}>
          1103 E. Ganesh Glory St #104.
          <br /> Ahemdabad, 380008
          <br /> (602) 867-1012
        </p>
        <p className={styles.text}>
          203 W. Vatva St #125.
          <br /> Ahemdabad, 380008
          <br /> (602) 867-1013
        </p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.text}>
          MONDAY UNTIL FRIDAY
          <br /> 9:00 – 22:00
        </p>
        <p className={styles.text}>
          SATURDAY - SUNDAY
          <br /> 12:00 – 24:00
        </p>
      </div>
    </div>
  </div>
  )
}

export default Footer
