import React, {useContext} from 'react';
import {AuthContext} from "./providers/AuthContextProvider";
import {Navbar} from "../shared/ui/Navbar/Navbar";
import {AuthForm} from "../features/users/authenticate/ui/AuthForm";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router/AppRouter";

export function App() {
    const {isLoggedIn} = useContext(AuthContext) || {};

    return (
        <>
            <BrowserRouter>
                <AuthForm/>
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