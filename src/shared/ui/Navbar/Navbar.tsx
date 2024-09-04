import React, {useContext} from 'react';
import {Button} from "../Button/Button";
import styles from "./Navbar.module.css"
import {AuthContext} from "../../../app/providers/AuthContextProvider";
import {useLocalStorage} from "@uidotdev/usehooks";
import {Text} from "../Text/Text";

export const Navbar = () => {
    const {logout} = useContext(AuthContext) || {};
    const [username, setUsername] = useLocalStorage<string | undefined>("username", undefined)

    return (
        <div className={styles.navbar}>
            <Text sizePx={16} color={"#A98467"}>{username}</Text>
            <Button isLarge={false} onClick={() => {
                logout!()
                setUsername(undefined)
            }}
            >
                Log out
            </Button>
        </div>
    );
};