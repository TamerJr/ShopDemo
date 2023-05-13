"use client";
import React ,{useEffect, useState} from "react";
import styles from "../styles/aside.module.css";
import { useProdContext } from "../context/Context";
const AsideBar = () => {
  const { eles, saveForNow } = useProdContext();
  let temptotalPrice = 0;
  const [totalPrice, setTotalPrice] = useState(temptotalPrice);

  for (let ele of eles) {
    temptotalPrice += ele.Product.price * ele.amount;
  }
  useEffect(() => {
    setTotalPrice(temptotalPrice);
  }, [temptotalPrice]);
  return (
    <aside className={styles.Aside}>
      <button onClick={saveForNow}>Save Cart</button>
     <div>
      <h2>Total Price</h2>
       <p>{totalPrice}</p>
       </div>
    </aside>
  );
};

export default AsideBar;
