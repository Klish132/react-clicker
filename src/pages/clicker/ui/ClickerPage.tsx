import React from 'react';
import {Button} from "../../../shared/ui/Button/Button";
import {Input} from "../../../shared/ui/Input/Input";
import {Modal} from "../../../shared/ui/Modal/Modal";
import {Text} from "../../../shared/ui/Text/Text";

export const ClickerPage = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <div>
            <Button isLarge={false}>Click me!</Button>
            <Button isLarge={true} onClick={() => setIsModalOpen(true)}>Click me!</Button>
            <Modal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
            >
                <Text sizePx={30} color={"#ADC178"}>Text</Text>
                <Input placeholder="Text..."></Input>
                <Button isLarge={false}>Submit</Button>
            </Modal>
        </div>
    );
};