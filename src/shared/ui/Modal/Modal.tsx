import React, {useMemo} from 'react';
import styles from "./Modal.module.css"

type ModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    closeOnOutsideClick: boolean;
    children?: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
    const rootClasses = useMemo(() => {
        const res = [styles.modal]

        if (props.isOpen){
            res.push(styles.modalActive)
        }

        return res.join(' ')
    }, [props.isOpen])

    return (
        <div className={rootClasses} onClick={() => {
            if (props.closeOnOutsideClick)
                props.setIsOpen(false)
        }}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};