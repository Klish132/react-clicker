import {QueryClient} from "react-query";
import {isAxiosError} from "axios";

export const queryClientInstance = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
            onError: error => {
                if (isAxiosError(error)) {
                    // todo
                }
            },
            useErrorBoundary: false,
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
});