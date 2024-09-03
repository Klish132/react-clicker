import React from 'react';
import {Button} from "../../../shared/ui/Button/Button";

export const ClickerPage = () => {
    return (
        <div>
            <Button isLarge={false}>Click me!</Button>
            <Button isLarge={true}>Click me!</Button>
        </div>
    );
};