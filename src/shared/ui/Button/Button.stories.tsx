import {Button, ButtonProps} from "./Button";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
}

export default meta;

export const Large: StoryObj<ButtonProps> = {
    args: {
        isLarge: true,
        children: "Click!"
    }
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        isLarge: false,
        children: "Click!"
    }
};