import React from 'react';
import {Button} from "../../../shared/ui/Button/Button";
import {Text} from "../../../shared/ui/Text/Text";

export const ClickerPage = () => {
    return (
        <div>
            <Text sizePx={50} color={"#DDE5B6"}>Clicks: 0</Text>
            <Button isLarge={true}>Click!</Button>
        </div>
    );
};