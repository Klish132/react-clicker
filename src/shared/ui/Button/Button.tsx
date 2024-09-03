import React, {ButtonHTMLAttributes} from 'react';
import styles from "./Button.module.css"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLarge: boolean
}

export const Button = ({isLarge, ...props}: ButtonProps) => {
    return (
        <button {...props} className={isLarge ? styles.buttonLarge : styles.buttonRegular}>
            <div className={styles.buttonLargeMeta}>
                {props.children}
            </div>
        </button>
    );
};