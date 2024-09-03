import React from 'react';
import {Button} from "../../../shared/ui/Button/Button";
import {Input} from "../../../shared/ui/Input/Input";

export const ClickerPage = () => {
    return (
        <div>
            <Button isLarge={false}>Click me!</Button>
            <Button isLarge={true}>Click me!</Button>
            <Input placeholder="Text..."></Input>
        </div>
    );
};