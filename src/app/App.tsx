import React from 'react';
import './styles/App.css';
import {ClickerPage} from "../pages/clicker/ui/ClickerPage";
import {AuthContextProvider} from "./providers/AuthContextProvider";

export function App() {
    return (
        <AuthContextProvider>
            <ClickerPage/>
        </AuthContextProvider>
    );
}