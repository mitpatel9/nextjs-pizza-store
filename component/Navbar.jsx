import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const router=useRouter()
  const cart=useSelector((state=>  state.cart.quantity))
 

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callbtn}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!</div>
        <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
      <div className={styles.list}>
        <Link href="/" passHref className={styles.Link}>
        <li className={styles.listitem}>Home</li>
        </Link>
        
        <li className={styles.listitem} >Products</li>
        <li className={styles.listitem} >order</li>
        <li className={styles.listitem}>Menu</li>
        <li className={styles.listitem}>Event</li>
        <li className={styles.listitem}>Blog</li>
        <li className={styles.listitem} onClick={()=>(router.push("/contact"))}>Contact</li>
      </div>
      </div>
      <div className={styles.item}>
       <Link href="/cart" passHref>
       <div className={styles.cart}>
       <Image src="/img/cart.png" alt="" width="30" height="30"/>
       <div className={styles.counter}>{cart}</div>
       </div>
       </Link>
      </div>
    </div>
  );
};

export default Navbar;
