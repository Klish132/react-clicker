import React from 'react';
import {Button} from "../../../shared/ui/Button/Button";
import {Input} from "../../../shared/ui/Input/Input";
import {Modal} from "../../../shared/ui/Modal/Modal";

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
                <Input placeholder="Text..."></Input>
                <Button isLarge={false}>Submit</Button>
            </Modal>
        </div>
    );
};