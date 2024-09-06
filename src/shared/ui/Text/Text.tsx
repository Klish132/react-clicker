import React from 'react';

export type TextProps = {
    sizePx: number;
    color: "#DDE5B6" | "#ADC178" | "#A98467",
    children: React.ReactNode;
}

export const Text = (props: TextProps) => {
    return (
        <p
            style={{
                fontWeight: "bold",
                fontSize: props.sizePx,
                color: props.color
            }}
        >
            {props.children}
        </p>
    );
};