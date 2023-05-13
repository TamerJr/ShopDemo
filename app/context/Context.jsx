"use client";
import { useState, useContext, createContext, useEffect } from "react";

const prodContext = createContext();
export const ProdContextProvider = ({ children }) => {
  let tempArr=JSON.parse(localStorage.getItem('userCart')) ||[];
  const [eles, setEles] = useState(tempArr);
  const [prodsCounter, setProdsCounter] = useState(0);

  const handleAdd = (ele) => {
    let newTempList = eles.filter((newele) => newele.Product.id === ele.id);
    if (newTempList.length === 1) {
      newTempList[0].amount += 1;
      let tempArr = eles;
      for (let x = 0; x < tempArr.length; x++) {
        if (tempArr[x]?.Product?.id === ele?.Product?.id) {
          tempArr[x] = newTempList[0];
          setEles(tempArr);
        }
      }
    } else {
      setEles((eles) => [...eles, { Product: ele, amount: 1 }]);
    }
    handleProductCounter()
  };

  const handleProductCounter=()=>{
    let prodsNum=0
    for(let prodNum of eles){
      prodsNum+=prodNum.amount
    }
    setProdsCounter(prodsNum)
  }
  useEffect(()=>{
    handleProductCounter()
  })
  const handleDelete = (ind) => {
    let temparr = eles?.filter((_, index) => index != ind);
    setEles(temparr);
    handleProductCounter()
  };
  const saveForNow=()=>{
    localStorage.setItem('userCart',JSON.stringify(eles))
  }

  return (
    <prodContext.Provider
      value={{
        handleProductCounter,
        saveForNow,
        prodsCounter,
        setEles,
        handleDelete,
        handleAdd,
        eles,
        setEles
      }}
    >
      {children}
    </prodContext.Provider>
  );
};
export const useProdContext = () => useContext(prodContext);
