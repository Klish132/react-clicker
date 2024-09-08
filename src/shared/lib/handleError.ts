import {AxiosError} from "axios";
import {toast} from "react-toastify";

export const handleError = <TData>(error: AxiosError<TData>) => {
    if (!error.response) {
        return;
    }

    if (error.message) {
        toast.error(error.message)
    }
    else {
        toast.error("Error!")
    }

}