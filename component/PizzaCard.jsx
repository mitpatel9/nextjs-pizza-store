import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = ({pizza}) => {
  let photo=`${pizza.img}`

  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
    {/* <Image src={"/img/pizza.png"} alt="" width="200" height="200" /> */}
    <img src={photo} alt="" srcset="" />
    </Link>
     <h1 className={styles.title}>{pizza.title}</h1>
    <span className={styles.price}>${pizza.prices[0]}</span>
    <p className={styles.desc}>
    {pizza.desc}
    </p>
  </div>
  )
}

export default PizzaCard
