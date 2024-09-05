import React, {createContext, useCallback, useEffect, useState} from "react";
import {useLocalStorage} from "../../shared/lib/useLocalStorage";

type AuthContextProps = {
    isLoggedIn: boolean;
    id: string | void;
    login: (id: string) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

type AuthContextProviderProps = {
    children: React.ReactNode;
};

export const AuthContextProvider = (props: AuthContextProviderProps) => {
    const [isInitialized, setIsInitialized] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [id, setId] = useLocalStorage<string | undefined>("id", undefined)

    const login = useCallback((newId: string) => {
        setId(newId)
        setIsLoggedIn(true);
    }, [setId]);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
        setId(undefined);
    }, [setId]);

    useEffect(() => {
        if (id) {
            login(id)
        }
        setIsInitialized(true)
    }, [id, login])

    return (
        isInitialized
            ?
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
            :
            <div/>
    );
};