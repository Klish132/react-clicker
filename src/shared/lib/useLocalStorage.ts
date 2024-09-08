import {useCallback, useMemo, useState} from "react";

export const useLocalStorage = <T>(key: string, initialValue: T): [T, (newValue: T) => void] => {
    const [value, setValue] = useState<T>(() => {
        const storageValue = localStorage.getItem(key);

        if (storageValue) {
            return JSON.parse(storageValue);
        }
        else {
            if (initialValue !== undefined) {
                localStorage.setItem(key, JSON.stringify(initialValue));
            }
            return initialValue;
        }
    });

    const setStateValue = useCallback((value: T) => {

        if (value !== undefined) {
            localStorage.setItem(key, JSON.stringify(value));
        }
        else {
            localStorage.removeItem(key);
        }
        setValue(value)
    }, [key])

    return useMemo(() => [
        value,
        setStateValue
    ], [value, setStateValue])
}