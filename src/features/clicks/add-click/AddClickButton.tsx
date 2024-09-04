import React from 'react';
import {Button} from "../../../shared/ui/Button/Button";

type AddClickButtonProps = {
    onClick: () => void;
}

export const AddClickButton = (props: AddClickButtonProps) => {
    return (
        <Button
            isLarge={true}
            onClick={() => props.onClick()}
        >
            Click!
        </Button>
    );
};