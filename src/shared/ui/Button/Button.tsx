import React, {ButtonHTMLAttributes, useMemo} from 'react';
import styles from "./Button.module.css"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLarge: boolean
}

export const Button = ({isLarge, ...props}: ButtonProps) => {

    const classes = useMemo(() => {
        let sizeClass = isLarge ? styles.buttonLarge : styles.buttonRegular
        return [sizeClass, props.className].join(' ')
    }, [isLarge, props.className])

    return (
        <button {...props} className={classes}>
            <div className={styles.buttonLargeMeta}>
                {props.children}
            </div>
        </button>
    );
};