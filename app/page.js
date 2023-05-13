import Image from 'next/image'
import styles from './page.module.css'
import ProdCard from './Components/ProdCard';

const handleGetSample=async()=>{
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=3");
    const data = await res.json();

    return data;
  } catch (err) {
    alert(err.message);
  }
};

export default async function  Home() {
  const homePageData=await handleGetSample()
  return (
    <main className={styles.main}>
      {homePageData?.map((prod,index)=>(
        <ProdCard prod={prod} key={index}/>
      ))}
    </main>
  )
}
