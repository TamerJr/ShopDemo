"use client";
import { useProdContext } from "../context/Context";
import { TiDelete } from "react-icons/ti";
import Image from "next/image";
import styles from "../styles/cartprodcard.module.css";
export const CartProdCard = ({  prod, index }) => {
  const { handleDelete, eles ,setEles ,handleProductCounter} = useProdContext();

  let tempArr=eles
  const handleUpdateAmount=(index, value)=>{
      tempArr[index].amount=Number(value)
      setEles([...tempArr])
      if (value==0){
          handleDelete(index)
        }
        handleProductCounter()
  }


  return (
    <article className={styles.Article}>
      <button
        className={styles.RemoveElement}
        onClick={() => handleDelete(index)}
      >
        <TiDelete size={30} />
      </button>
      <div>
        <Image src={prod?.image} width={500} height={500} alt={prod?.title} />
      </div>
      <div className={styles?.ProductInfo}>
        <h1>{prod?.title}</h1>
        <p>{prod?.description}</p>

        <p>
          {" "}
          <span>Price : </span>
          {prod?.price}
        </p>
        <div className={styles?.UpdatePart}>
          <input
            type="number"
            placeholder="Amount"
            onChange={(e) => handleUpdateAmount(index, e.target.value)}
            value={eles[index]?.amount}
          />
          
        </div>
        <p>
          <span>total price : </span>
          {prod?.price * eles[index]?.amount}
        </p>
      </div>
    </article>
  );
};
