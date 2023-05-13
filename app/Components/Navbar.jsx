"use client";
import Link from "next/link";
import React from "react";
import { useProdContext } from "../context/Context";
import { BsCart } from "react-icons/bs";
import styles from "../styles/navbar.module.css";
const Navbar = () => {
  const { prodsCounter } = useProdContext();
  return (
    <nav className={styles.Nav}>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/shop">
          <li>Shop</li>
        </Link>{" "}
        <Link href="/cart">
          <li className={styles.LastList}>
            <BsCart size={30} />
            <small>{prodsCounter}</small>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
