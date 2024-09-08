import React, {useContext} from 'react';
import {Text} from "../../../shared/ui/Text/Text";
import {useClicks} from "../lib/useClicks";
import {AuthContext} from "../../../app/providers/AuthContextProvider";
import {useClickStatusesElement} from "../lib/useClickStatusesElement";
import {Button} from "../../../shared/ui/Button/Button";
import styles from "./ClickerPage.module.css"
import {useLocalStorage} from "../../../shared/lib/useLocalStorage";

export const ClickerPage = () => {
    const [username] = useLocalStorage<string | undefined>("username", undefined)
    const {id} = useContext(AuthContext) || {};
    const [clicksCount, setClicksCount] = useClicks(username!, id!)
    const clickStatusesElement = useClickStatusesElement(clicksCount!)

    const clickMultiplier = 1

    return (
        <div className={styles.page}>
            <div className={styles.pageHeader}>
                <Button
                    isLarge={false}
                    onClick={() => setClicksCount(0)}
                >
                    Reset
                </Button>
            </div>
            <div className={styles.pageMain}>
                <Text
                    sizePx={50}
                    color={"#DDE5B6"}
                >
                    Clicks: {clicksCount}
                </Text>
                <div className={styles.clickerWrapper}>
                    <div className={styles.clickerButtonContainer}>
                        <Button
                            isLarge={true}
                            onClick={() => setClicksCount(clicksCount! + clickMultiplier)}
                        >
                            Click!
                        </Button>
                    </div>
                    {clickStatusesElement}
                </div>
            </div>
        </div>
    );
};