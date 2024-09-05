import React, {useContext} from 'react';
import {Text} from "../../../shared/ui/Text/Text";
import {useClicks} from "../lib/useClicks";
import {AuthContext} from "../../../app/providers/AuthContextProvider";
import {ClickStatus} from "../../../entities/clicks/ui/ClickStatus";
import {useClickStatusesArray} from "../lib/useClickStatusesArray";
import {Button} from "../../../shared/ui/Button/Button";
import styles from "./ClickerPage.module.css"
import {useLocalStorage} from "../../../shared/lib/useLocalStorage";

export const ClickerPage = () => {
    const [username] = useLocalStorage<string | undefined>("username", undefined)
    const {id} = useContext(AuthContext) || {};
    const [clicksCount, setClicksCount] = useClicks(username!, id!)
    const clickStatusesArray = useClickStatusesArray(clicksCount!, 3)

    const clickMultiplier = 1

    return (
        <div className={styles.page}>
            <div className={styles.pageHeader}>
                <Button
                    className={styles.pageHeaderItem}
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
                    {clickStatusesArray.map((row, rowIdx) => (
                        <div key={rowIdx}>
                            {row.map(leaf => <ClickStatus key={leaf}/>)}
                        </div>
                    ))}
                    <Button
                        className={styles.clickerButton}
                        isLarge={true}
                        onClick={() => setClicksCount(clicksCount! + clickMultiplier)}
                    >
                        Click!
                    </Button>
                </div>
            </div>
        </div>
    );
};