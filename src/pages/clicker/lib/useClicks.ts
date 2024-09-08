import React, {useEffect, useMemo, useState} from "react";
import {useMutation, useQuery} from "react-query";
import {axiosInstance} from "../../../shared/config/axios/axiosInstance";
import {parseResponse} from "../../../shared/lib/parseResponse";
import {handleError} from "../../../shared/lib/handleError";
import {useDebounce} from "../../../shared/lib/useDebounce";
import {ClicksDTO} from "../model/ClicksDTO";

export const useClicks = (username: string, id: string): [number | undefined, React.Dispatch<React.SetStateAction<number | undefined>>] => {
    const [clicksCount, setClicksCount] = useState<number | undefined>(undefined)
    const debouncedClicksCount = useDebounce(clicksCount, 300)

    const config = useMemo(() => {
        return {
            headers: {"X-User-Id": id}
        }
    }, [id])

    const {data: apiClicksCount} = useQuery(["clicksCount", username], () => axiosInstance
        .get<number>(`clicks/${username}`, config)
        .then(parseResponse))

    const { mutate: putClicks } = useMutation(
        (data: ClicksDTO) => axiosInstance.put(`clicks/${username}`, data, config)
            .catch(handleError),
        {
            onSuccess: () => {
                setClicksCount(debouncedClicksCount)
            }
        }
    )

    useEffect(() => {
        setClicksCount(clicks => apiClicksCount ?? clicks);
    }, [apiClicksCount])

    useEffect(() => {
        if (debouncedClicksCount || debouncedClicksCount === 0) {
            putClicks({clicksCount: debouncedClicksCount})
        }
    }, [putClicks, debouncedClicksCount])

    return useMemo(() => [
        clicksCount,
        setClicksCount
    ], [clicksCount, setClicksCount])
}