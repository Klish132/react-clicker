import React, {useEffect, useMemo, useState} from "react";
import {useQuery} from "react-query";
import {axiosInstance} from "../../../shared/config/axios/axiosInstance";
import {parseResponse} from "../../../shared/lib/parseResponse";
import {handleError} from "../../../shared/lib/handleError";
import { useDebounce } from "@uidotdev/usehooks";

export const useClicks = (username: string, id: string): [number | undefined, React.Dispatch<React.SetStateAction<number | undefined>>] => {
    const [clicksCount, setClicksCount] = useState<number | undefined>(undefined)
    const debouncedClicksCount = useDebounce(clicksCount, 500)

    const config = useMemo(() => {
        return {
            headers: {"X-User-Id": id}
        }
    }, [id])

    const {data: apiClicksCount} = useQuery(["clicksCount", username], () => axiosInstance
        .get<number>(`clicks/${username}`, config)
        .then(parseResponse))

    useEffect(() => {
        setClicksCount(clicks => apiClicksCount ?? clicks);
    }, [apiClicksCount])

    useEffect(() => {
        if (debouncedClicksCount || debouncedClicksCount === 0) {
            axiosInstance.put(`clicks/${username}`, {clicksCount: debouncedClicksCount}, config)
                .catch(handleError)
                .then(() => {
                    setClicksCount(debouncedClicksCount)
                })
        }
    }, [username, config, debouncedClicksCount])

    return useMemo(() => [
        clicksCount,
        setClicksCount
    ], [clicksCount, setClicksCount])
}