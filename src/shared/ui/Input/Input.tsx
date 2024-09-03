import React, {InputHTMLAttributes} from 'react';
import styles from "./Input.module.css"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {}

export const Input = (props: InputProps) => {
    return (
        <input {...props} className={styles.input}/>
    );
};