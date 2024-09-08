import {Text, TextProps} from "./Text";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Text> = {
    title: "Text",
    component: Text,
}

export default meta;

export const NormalText: StoryObj<TextProps> = {
    args: {
        sizePx: 36,
        color: "#ADC178",
        children: "Text..."
    }
}