import React, { useState } from "react";
import styles from "../styles/contact.module.css";
import axios from "axios";

const Cotact = () => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [msg,setMsg]=useState('')


  const handalesubmit= (e)=>{
    e.preventDefault()
    const newmsg={
      "name":name,
      "email":email,
      "message":msg
    }
   
    handelesend(newmsg)  
  }
const handelesend= async(newmsg)=>{
  try{
    console.log(newmsg)
    await axios.post("http://localhost:3000/api/message", newmsg)
    setEmail('')
    setMsg('')
    setName('')
  }catch(err){
 
  }

}
  

  return (
    <div className={styles.contact}>
      <div className={styles.tital}>
        <h3>Welcome To Pizza House </h3>
   
      </div>
      <div className={styles.form}>
       
        <fieldset className={styles.fild}>
          <legend>How can We Help You?</legend>
          <label>Enter Your Name</label>
          <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
          <label>Enter Your Email</label>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
          <label>Enter Your Message</label>
          <textarea value={msg} rows="5" cols="30" onChange={e=>setMsg(e.target.value)}/>
          <button onClick={e=>handalesubmit(e)}>Submit</button>
        </fieldset>
    
      </div>
    </div>
  );
};

export default Cotact;

