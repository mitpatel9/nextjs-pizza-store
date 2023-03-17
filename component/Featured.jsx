import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Feature.module.css";

const Featured = () => {
    const [index, setIndex] = useState(0);
    let imgarr=[
        "/img/feature1.png",
        "/img/feature2.png",
        "/img/feature3.png"
    ]
    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
  return (
    <div className={styles.container}>
    <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
      <Image src="/img/arrowl.png" fill  alt="arrow" style={{ objectFit:"contain"}}   sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
    </div>
    <div className={styles.wrapper}   style={{transform:`translateX(${-100*index}vw)`}}>
      {imgarr.map((img, i) => (
        <div className={styles.imgContainer} key={i}>
          <Image src={img} alt="" fill  style={{ objectFit:"contain"}}  priority/>
        </div>
      ))}
    </div>
    <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
      <Image src="/img/arrowr.png" alt=""   fill style={{  objectFit:"contain"}}    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
    </div>
  </div>
  );
};

export default Featured;
