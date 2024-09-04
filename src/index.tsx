import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/App';
import {queryClientInstance} from "./shared/config/reactQuery/queryClientInstance";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {AuthContextProvider} from "./app/providers/AuthContextProvider";
import {QueryClientProvider} from "react-query";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <QueryClientProvider client={queryClientInstance}>
        <AuthContextProvider>
            <App/>
        </AuthContextProvider>
        <ToastContainer
            position="top-right"
            autoClose={1500}
            limit={4}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"/>
    </QueryClientProvider>
);
