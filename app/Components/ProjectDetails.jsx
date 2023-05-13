"use client";
import styles from "../styles/projectdetails.module.css"
import { useProdContext } from "../context/Context";
import Image from "next/image";
const ProjectDetails = ({ ProdData }) => {
  const { handleAdd } = useProdContext();
  console.log(ProdData);
  return (
    <div className={styles.projectDetailsContainer}>
      <div className={styles.LeftSideContainer}>
        <h1>{ProdData?.title}</h1>
        <div>
          <h4>Description</h4>
          <p>{ProdData?.description}</p>
        </div>
        <h2>{ProdData?.price}</h2>
        <button onClick={() => handleAdd(ProdData)}>Add To Cart</button>
      </div>
      <div className={styles.RightSideContainer}>
        <small className={styles.PriceSmall}>{ProdData.rating.rate}</small>
        <Image className={styles?.Image}
          src={ProdData.image}
          alt={ProdData.title}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
