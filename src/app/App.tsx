import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "./providers/AuthContextProvider";
import {Navbar} from "../shared/ui/Navbar/Navbar";
import {AuthForm} from "../features/users/authenticate/ui/AuthForm";
import {Modal} from "../shared/ui/Modal/Modal";
import {useLocalStorage} from "@uidotdev/usehooks";
import {postLogIn} from "../entities/User/api/postLogIn";
import {handleError} from "../shared/lib/handleError";
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router/AppRouter";

export function App() {
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
                }
            })
    }

    useEffect(() => {
        if (!isLoggedIn) {
            setIsAuthModalOpen(true);
        }
    }, [isLoggedIn]);

    return (
        <>
            <BrowserRouter>
                <Modal
                    isOpen={isAuthModalOpen}
                    setIsOpen={setIsAuthModalOpen}
                    closeOnOutsideClick={false}
                >
                    <AuthForm onAuthenticate={handleAuth}/>
                </Modal>
                <Navbar/>
                {isLoggedIn
                    ?
                    <AppRouter/>
                    : <div></div>
                }
            </BrowserRouter>
        </>
    );
}