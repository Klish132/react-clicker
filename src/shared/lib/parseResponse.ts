import {AxiosResponse} from "axios";

export const parseResponse = <TData>(response: AxiosResponse<TData>): TData => {
    return response.data
};
