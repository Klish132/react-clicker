import React, {useContext} from 'react';
import {Text} from "../../../shared/ui/Text/Text";
import {useClicks} from "../lib/useClicks";
import {useLocalStorage} from "@uidotdev/usehooks";
import {AuthContext} from "../../../app/providers/AuthContextProvider";
import {AddClickButton} from "../../../features/clicks/add-click/AddClickButton";

export const ClickerPage = () => {
    const [username] = useLocalStorage<string | undefined>("username", undefined)
    const {id} = useContext(AuthContext) || {};
    const [clicksCount, setClicksCount] = useClicks(username!, id!)

    return (
        <div>
            <Text sizePx={50} color={"#DDE5B6"}>Clicks: {clicksCount}</Text>
            <AddClickButton onClick={() => setClicksCount(clicksCount + 1)}/>
        </div>
    );
};