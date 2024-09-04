import React, {useState} from 'react';
import {Text} from "../../../../shared/ui/Text/Text";
import {Input} from "../../../../shared/ui/Input/Input";
import {Button} from "../../../../shared/ui/Button/Button";

type AuthFormProps = {
    onAuthenticate: (username: string, password: string) => void;
}

export const AuthForm = (props: AuthFormProps) => {
    const [authInfo, setAuthInfo] = useState({username: "", password: ""});

    return (
        <form onSubmit={e => {
            e.preventDefault();
            props.onAuthenticate(authInfo.username, authInfo.password);
        }}>
            <Text sizePx={30} color={"#ADC178"}>Log in</Text>
            <Input
                placeholder="Username..."
                onChange={e => setAuthInfo({...authInfo, username: e.target.value})}
            />
            <Input
                placeholder="Password..."
                onChange={e => setAuthInfo({...authInfo, password: e.target.value})}
            />
            <Button
                type="submit"
                isLarge={false}
            >
                Log in
            </Button>
        </form>
    );
};