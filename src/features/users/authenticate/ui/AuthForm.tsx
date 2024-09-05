import React, {useContext, useEffect, useState} from 'react';
import {Text} from "../../../../shared/ui/Text/Text";
import {Input} from "../../../../shared/ui/Input/Input";
import {Button} from "../../../../shared/ui/Button/Button";
import {Modal} from "../../../../shared/ui/Modal/Modal";
import {AuthContext} from "../../../../app/providers/AuthContextProvider";
import {useLocalStorage} from "../../../../shared/lib/useLocalStorage";
import {postLogIn} from "../../../../entities/user/api/postLogIn";
import {handleError} from "../../../../shared/lib/handleError";

export const AuthForm = () => {
    const [authInfo, setAuthInfo] = useState({username: "", password: ""});

    const {isLoggedIn, login} = useContext(AuthContext) || {};
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [, setUsername] = useLocalStorage<string | undefined>("username", undefined)

    const handleAuth = (authUsername: string, authPassword: string) => {
        postLogIn(authUsername, authPassword)
            .catch(handleError)
            .then(guid => {
                if (guid) {
                    login!(guid)
                    setIsAuthModalOpen(false);
                    setUsername(authUsername)
                    setAuthInfo({username: "", password: ""})
                }
            })
    }

    useEffect(() => {
        if (!isLoggedIn) {
            setIsAuthModalOpen(true);
        }
    }, [isLoggedIn]);


    return (
        <Modal
            isOpen={isAuthModalOpen}
            setIsOpen={setIsAuthModalOpen}
            closeOnOutsideClick={false}
        >
            <form onSubmit={e => {
                e.preventDefault();
                handleAuth(authInfo.username, authInfo.password);
            }}>
                <Text sizePx={30} color={"#ADC178"}>Log in</Text>
                <Input
                    placeholder="Username..."
                    value={authInfo.username}
                    onChange={e => setAuthInfo({...authInfo, username: e.target.value})}
                />
                <Input
                    placeholder="Password..."
                    type="password"
                    value={authInfo.password}
                    onChange={e => setAuthInfo({...authInfo, password: e.target.value})}
                />
                <Button
                    type="submit"
                    isLarge={false}
                >
                    Log in
                </Button>

            </form>
        </Modal>
    );
};