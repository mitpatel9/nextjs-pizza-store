import axios from "axios";
import { useEffect, useState } from "react";
import styles from '../styles/help.module.css'

const help = () => {
  const [msg,setMsg]=useState([])

  const handledelete=async (ms)=>{
    const id=ms._id
    try{
      await axios.delete(`http://localhost:3000/api/message/?id=${id}`) 
    }catch(err){
   
    }
   }

  useEffect(()=>{
   const handleget=async ()=>{
    try{
      const msg= await axios.get("http://localhost:3000/api/message");
      setMsg(msg.data)
    }catch(err){
   
    }
   }
   handleget()
  },[msg])

  return (
    <div className={styles.container}>
      <table className={styles.table} >
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>name</th>
            <th className={styles.th}>email</th>
            <th className={styles.th}>message</th>
            <th className={styles.th}>resolve</th>
            <th className={styles.th}>delete</th>
          </tr>
        </thead>
        <tbody>
          {msg.map((ms)=>(
            <tr >
            <td className={styles.td}>{ms.name}</td>
            <td className={styles.td}>{ms.email}</td>
            <td className={styles.td}>{ms.message}</td>
            <td className={styles.td}><button>resolve</button></td>
            <td className={styles.td}><button onClick={()=>handledelete(ms)}>delete</button></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default help;

// export async function getServerSideProps() {
//   const msg= await axios.get("http://localhost:3000/api/message");

//   return {
//     props: {
//       msg: msg.data
//     }, // will be passed to the page component as props
//   }
// }