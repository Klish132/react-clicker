import React, {useContext} from 'react';
import {Button} from "../Button/Button";
import styles from "./Navbar.module.css"
import {AuthContext} from "../../../app/providers/AuthContextProvider";
import {Text} from "../Text/Text";
import {useLocalStorage} from "../../lib/useLocalStorage";

export const Navbar = () => {
    const {logout} = useContext(AuthContext) || {};
    const [username, setUsername] = useLocalStorage<string | undefined>("username", undefined)

    return (
        <div className={styles.navbar}>
            <Text sizePx={16} color={"#A98467"}>{username}</Text>
            <div className={styles.navbarList}>
                <Button isLarge={false} onClick={() => {
                    logout!()
                    setUsername(undefined)
                }}
                >
                    Log out
                </Button>
            </div>
        </div>
    );
};