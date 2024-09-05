import React from 'react';
import {ReactComponent as Leaf} from "../assets/Leaf.svg"
import styles from "./ClickStatus.module.css"

type ClickStatusProps = {
    color: "#F0EAD2" | "#DDE5B6" | "#ADC178"
}

export const ClickStatus = (props: ClickStatusProps) => {
    const rand = Math.random()

    return (
        <Leaf
            className={styles.clickStatus}
            style={{animationDelay: `-${rand}s`, color: `${props.color}`}}
        />
    );
};