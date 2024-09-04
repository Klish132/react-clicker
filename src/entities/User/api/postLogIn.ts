import {axiosInstance} from "../../../shared/config/axios/axiosInstance";
import {parseResponse} from "../../../shared/lib/parseResponse";

export const postLogIn = (username: string, password: string) => axiosInstance
    .post<string>(`/users/auth?userName=${username}&password=${password}`)
    .then(parseResponse)