import ProjectDetails from "@/app/Components/ProjectDetails";
import React from "react";
const getEleData = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return data;
};
const page = async ({ params }) => {
  const prodData = await getEleData(params.productpage);
  return <ProjectDetails ProdData={prodData}/>;
};

export default page;
