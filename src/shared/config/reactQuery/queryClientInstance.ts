import {QueryClient} from "react-query";
import {isAxiosError} from "axios";
import {handleError} from "../../lib/handleError";

export const queryClientInstance = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
            onError: error => {
                if (isAxiosError(error)) {
                    handleError(error);
                }
            },
            useErrorBoundary: false,
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
});