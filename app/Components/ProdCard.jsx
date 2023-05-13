"use client";
import Link from "next/link";
import { useProdContext } from "../context/Context";
import styles from "../styles/prodcard.module.css";
import Image from "next/image";
const ProdCard = ({ prod }) => {
  const { handleAdd } = useProdContext();
  return (
    <article className={styles.Article}>
      <div className={styles.ImageContainer}>
        <Image src={prod?.image} width={500} height={500} alt={prod?.title} />
        <small>{prod?.rating.rate}</small>
      </div>
      <div className={styles.ImportantDetails}>
        <h1>{prod?.title}</h1>
        <h4>{prod?.price} $</h4>
      </div>
      <div className={styles.CTA}>
        <button onClick={() => handleAdd(prod)} className={styles.AddToCart}>
          Add to cart
        </button>
        <Link href={`/shop/${prod.id}`} className={styles.ShowMoreDetails}>
          <p> More Details</p>
        </Link>
      </div>
    </article>
  );
};

export default ProdCard;
