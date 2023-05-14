import Image from "next/image";
import styles from "./page.module.css";
import ProdCard from "./Components/ProdCard";

const handleGetSample = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=3");
    const data = await res.json();

    return data;
  } catch (err) {
    alert(err.message);
  }
};
const handleGetWatchs = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    const data = await res.json();

    return data;
  } catch (err) {
    alert(err.message);
  }
};
export default async function Home() {
  const homePageData = await handleGetSample();
  const watchsData = await handleGetWatchs();
  console.log(watchsData)
  return (
    <main className={styles.main}>
      <section className={styles.SampleProd}>
        {homePageData?.map((prod, index) => (
          <ProdCard prod={prod} key={index} />
        ))}
      </section>
      <div className={styles.WatchsBar}>
        {watchsData?.products?.map((ele) => (
            <div>
              <Image src={ele.thumbnail} width={500} height={500} />
              <p>{ele.title}</p>
            </div>
        ))}
      </div>
    </main>
  );
}
