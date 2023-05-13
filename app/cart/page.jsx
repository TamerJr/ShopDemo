"use client";
import { useProdContext } from "../context/Context";
import { CartProdCard } from "../Components/CartProdCard";
import AsideBar from "../Components/AsideBar";
import styles from "../styles/cart.module.css";
const page = () => {
  const { eles } = useProdContext();

  return (
    <div className={styles.CartPage}>
      <div>
        {eles?.map((prod, index) => (
          <CartProdCard prod={prod.Product} index={index} key={index} />
        ))}
      </div>
      <AsideBar />
    </div>
  );
};

export default page;
