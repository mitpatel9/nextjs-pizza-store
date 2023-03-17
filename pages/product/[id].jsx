
import { addProduct } from '@/store/reducer/cartslice';
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from '../../styles/Product.module.css'

const Product = ({pizza}) => {
  const dispatch =useDispatch();
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);


  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option ]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handalclick=()=>{
     dispatch(addProduct({...pizza,extras,price,quantity}))
  }
  let photo=`${pizza.img}`
  return (
    <div className={styles.container}>
    <div className={styles.left}>
      <div className={styles.imgContainer}>
         <img src={photo} alt="" srcset="" />
        {/* <Image src={pizza.img} style={{objectFit:"contain"}} fill alt="" /> */}
      </div>
    </div>
    <div className={styles.right}>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>$ {price}</span>
      <p className={styles.desc}>{pizza.desc}</p>
      <h3 className={styles.choose}>Choose the size</h3>
      <div className={styles.sizes}>
        <div className={styles.size} onClick={() => handleSize(0)}>
          <Image src="/img/size.png" fill alt="" />
          <span className={styles.number}>Small</span>
        </div>
        <div className={styles.size} onClick={() => handleSize(1)}>
          <Image src="/img/size.png" fill alt=""/>
          <span className={styles.number}>Medium</span>
        </div>
        <div className={styles.size} onClick={() => handleSize(2)}>
          <Image src="/img/size.png" fill alt=""/>
          <span className={styles.number}>Large</span>
        </div>
      </div>
      <h3 className={styles.choose}>Choose additional ingredients</h3>
      <div className={styles.ingredients}>
        {pizza.extraOption.map((option)=>(
          <div className={styles.option}>
          <input
            type="checkbox"
            id={option.text}
            name={option.text}
            onChange={(e) => handleChange(e, option)}
            className={styles.checkbox}
          />
          <label htmlFor="double">{option.text}</label>
        </div>
        ))}
        
      </div>
      <div className={styles.add}>
          <input type="number" onChange={(e) => setQuantity(Number(e.target.value))} defaultValue={1} className={styles.quantity}/>
          <button className={styles.button} onClick={()=>handalclick()}>Add to Cart</button>
      </div>
    </div>
  </div>
  )
}

export async function getServerSideProps({params}) {
  const res= await axios.get(`http://localhost:3000/api/products/${params.id}`);

  return {
    props: {
      pizza: res.data
    }, // will be passed to the page component as props
  }
}

export default Product


