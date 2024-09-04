import React from 'react';
import Leaf from "../assets/Leaf.svg"
import styles from "./ClickStatus.module.css"

export const ClickStatus = () => {

    const rand = Math.random()

    return (
        <img
            alt="status"
            className={styles.clickStatus}
            style={{animationDelay: `-${rand}s`}}
            src={Leaf}/>
    );
};