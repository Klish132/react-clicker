import {useLocalStorage} from "@uidotdev/usehooks";
import React, {createContext, useCallback, useState} from "react";

type AuthContextProps = {
    isLoggedIn: boolean;
    id: string | void;
    login: () => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

type AuthContextProviderProps = {
    children: React.ReactNode;
};

export const AuthContextProvider = (props: AuthContextProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [id] = useLocalStorage<string>("id", undefined)

    if (id) {
        setIsLoggedIn(true);
    }

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                id: id,
                login: login,
                logout: logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};