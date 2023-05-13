import ProdCard from "../Components/ProdCard";
import styles from "../styles/shop.module.css"
const getData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    return data;
  } catch (err) {
    alert(err.message);
  }
};
const page = async() => {
  const prodArr = await getData();
  return (
    <div className={styles.ShopPage}>
      {prodArr?.map((prod, index) => (
        <ProdCard key={index} prod={prod} />
      ))}
    </div>
  );
};

export default page;
