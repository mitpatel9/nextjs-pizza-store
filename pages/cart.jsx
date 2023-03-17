import styles from "../styles/Cart.module.css";
import Image from "next/image";
import {  useSelector } from "react-redux";
import Link from "next/link";


const Cart = () => {
  const cart=useSelector((state=>state.cart))
  console.log()



  return (
    <div className={styles.container}>
      <div className={styles.left}>
     
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
         
   {cart.product.map((item)=>(
        <tr className={styles.tr} key={item._id}>
        <td>
          <div className={styles.imgContainer}>

            
            <img src={item.img} alt="" srcset="" style={{width:"110px", height:"110px"}}/>
            {/* <Image
              src={item.img}
              fill
            style={{objectFit:"cover"}}
              alt=""
            /> */}
          </div>
        </td>
        <td>
          <span className={styles.name}>{item.title}</span>
        </td>
        <td>
          <span className={styles.extras}>
           {item.extras.map(ex=>
            <span key={ex._id}>{ex.text}, </span>
           )}
          </span>
        </td>
        <td>
          <span className={styles.price}>${item.price}</span>
        </td>
        <td>
          <span className={styles.quantity}>{item.quantity}</span>
        </td>
        <td>
          <span className={styles.total}>${item.price *item.quantity}</span>
        </td>
        <td>
        
        </td>
      </tr>

      ))}
       
       
       
            
         


        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
          {cart.quantity===0 ? 
          <button className={styles.button1}>CHECKOUT NOW!</button>
          :
          <Link href={"/orders/1"}>
          <button className={styles.button}>CHECKOUT NOW!</button>
          </Link> }
         
        </div>
      </div>
    </div>
  );
};

export default Cart;