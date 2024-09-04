import {axiosInstance} from "../../../shared/config/axios/axiosInstance";
import {parseResponse} from "../../../shared/lib/parseResponse";

export const getLogIn = (username: string) => axiosInstance
    .get<string>(`/users?userName=${username}`)
    .then(parseResponse)