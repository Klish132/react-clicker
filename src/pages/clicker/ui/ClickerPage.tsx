import React, {useContext} from 'react';
import {Button} from "../../../shared/ui/Button/Button";
import {Modal} from "../../../shared/ui/Modal/Modal";
import AuthForm from "../../../features/users/authenticate/ui/AuthForm";
import {postLogIn} from "../../../entities/User/api/postLogIn";
import {AuthContext} from "../../../app/providers/AuthContextProvider";
import {useLocalStorage} from "@uidotdev/usehooks";

export const ClickerPage = () => {
    const {isLoggedIn, login} = useContext(AuthContext) || {};
    const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(!isLoggedIn);
    const [username, setUsername] = useLocalStorage<string | undefined>("username", undefined)

    const handleAuth = (authUsername: string, authPassword: string) => {
        postLogIn(authUsername, authPassword)
            .catch(error => console.log(error))
            .then(guid => {
                if (guid) {
                    login!(guid)
                    setIsAuthModalOpen(false);
                    setUsername(authUsername)
                }
            })
    }

    return (
        <div>
            <Button isLarge={false}>Click me!</Button>
            <Button isLarge={true} onClick={() => setIsAuthModalOpen(true)}>Click me!</Button>
            <Modal
                isOpen={isAuthModalOpen}
                setIsOpen={setIsAuthModalOpen}
                closeOnOutsideClick={false}
            >
                <AuthForm onAuthenticate={handleAuth}/>
            </Modal>
        </div>
    );
};