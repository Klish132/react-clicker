import {useMemo} from "react";

export const useClickStatusesArray = (clicksCount: number, maxRows: number) => useMemo(() => {
    let result: number[][] = []

    // Округляем кол-во кликов вниз до множителя 10, или до 0 (0, 10, 100, 1000, и т.п.)
    let flooredClicks = Math.pow(10, Math.ceil(Math.log10(clicksCount)) - 1)
    flooredClicks = flooredClicks === 1 ? 0 : flooredClicks
    // Считаем кол-во рядов для текущего кол-ва кликов (всегда мин. 1 ряд)
    let rowsCount = flooredClicks === 0
        ? 1
        : Math.min(maxRows, Math.log10(flooredClicks) + 1)

    // Для каждого ряда
    for (let row = 1; row <= rowsCount; row++) {

        // Макс. кол-во статусов на этом ряду (7 на 1, 11 на 2, 15 на 3, и т.п.)
        let maxRowStatusesCount = 4 * row + 3

        // Кол-во статусов на этом ряду
        let statusesOnThisRow = 0
        // Если текущий ряд уже заполнен, то кол-во статусов == максимальному на этом ряду
        if (row < rowsCount) {
            statusesOnThisRow = maxRowStatusesCount
        }
        // Если текущий ряд - последний, и заполнен не целиком
        else {
            // Считаем сумму максимальных кол-еств кликов на предыдущих рядах
            let previousRowsMaxClicks = Array
                .from(Array(row).keys())
                .reduce((partialSum, prevRow) => partialSum + prevRow === 0 ? 0 : Math.pow(10, prevRow), 0)
            // Считаем макс. кол-во кликов на этом ряду (10 на 1, 90 на 2, 900 на 3, и т.п.)
            let rowMaxClicks = Math.pow(10, row) - previousRowsMaxClicks
            // Кол-во кликов, за которое на этом ряду должен добавится 1 статус
            let clicksPerOneStatus = Math.floor(rowMaxClicks / maxRowStatusesCount * 100) / 100
            // Текущее кол-во кликов на этом ряду

            let clicksOnThisRow = clicksCount - flooredClicks
            // Считаем кол-во статусов на этом ряду
            statusesOnThisRow = Math.min(maxRowStatusesCount, Math.floor(clicksOnThisRow / clicksPerOneStatus))
        }

        // Для посчитанного кол-ва статусов, заполняем массив
        result[row - 1] = Array.from(Array(statusesOnThisRow).keys())
    }

    return result
}, [clicksCount, maxRows])