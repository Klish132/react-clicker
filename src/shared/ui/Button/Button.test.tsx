import {render, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Button} from "./Button";
import styles from "./Button.module.css"

describe(Button, () => {
    it('should be large when props.isLarge === true', async () => {
        const {getByTestId} = render(
            <Button data-testid="Button" isLarge={true}/>
        )
        const className = getByTestId("Button").className;
        expect(className).toContain(styles.buttonLarge);
    });

    it('should be regular when props.isLarge === false', async () => {
        const {getByTestId} = render(
            <Button data-testid="Button" isLarge={false}/>
        )
        const className = getByTestId("Button").className;
        expect(className).toContain(styles.buttonRegular);
    });

    it('should have extra className from props', async () => {
        const extraClassName = "test"
        const {getByTestId} = render(
            <Button data-testid="Button" isLarge={true} className={extraClassName}/>
        )
        const className = getByTestId("Button").className;
        expect(className).toContain([styles.buttonLarge, extraClassName].join(' '));
    });

    it('should contain text', async () => {
        const text = "Hello!";
        const {getByTestId} = render(
            <Button data-testid="Button" isLarge={false}>
                {text}
            </Button>
        )

        const { getByText } = within(getByTestId("Button"))
        expect(getByText(text)).toBeInTheDocument()
    });

    it('should trigger onClick()', async () => {
        const onClick = jest.fn();
        const {getByTestId} = render(
            <Button data-testid="Button" isLarge={false} onClick={e => onClick()}></Button>
        )
        
        const component = getByTestId("Button")
        await userEvent.click(component);
        expect(onClick).toHaveBeenCalled()
    });
});