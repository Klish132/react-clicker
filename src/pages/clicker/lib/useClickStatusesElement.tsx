import React, {useMemo} from "react";
import styles from "../ui/ClickerPage.module.css";
import {ClickStatus} from "../../../entities/clicks/ui/ClickStatus";

const getLayerStyles = (layerIdx: number) => {
    let layerStyles = [styles.statusesLayer]

    switch (layerIdx) {
        case 1:
            layerStyles.push(styles.statusesFirstLayer)
            break;
        case 2:
            layerStyles.push(styles.statusesSecondLayer)
            break;
        case 3:
            layerStyles.push(styles.statusesThirdLayer)
            break;
    }

    return layerStyles.join(' ')
}

const getLayerColor = (layerIdx: number): "#F0EAD2" | "#DDE5B6" | "#ADC178" => {
    switch (layerIdx) {
        case 1:
            return "#F0EAD2";
        case 2:
            return "#DDE5B6";
        default:
            return "#ADC178";
    }
}

export const useClickStatusesElement = (clicksCount: number) => useMemo(() => {
    let result = []

    for (let layer = 1; layer <= 3; layer++) {
        let topCount = 2 * layer + 1;
        let perSideCount = layer + 1;

        let layerOpacityMultiplier = 1 / Math.pow(10, layer) * clicksCount;
        let layerStatusesColor = getLayerColor(layer);

        let top = (Array.from(Array(topCount).keys()).map(topStatusIdx =>
            <ClickStatus
                key={topStatusIdx}
                color={layerStatusesColor}
            />))

        let sides = []
        for (let i = 0; i < 2; i++) {
            sides.push(<div className={styles.statusesSingleSideContainer}>
                {Array.from(Array(perSideCount).keys()).map(statusIdx =>
                    <ClickStatus
                        key={statusIdx}
                        color={layerStatusesColor}
                    />)}
            </div>)
        }

        result[layer - 1] = (
            <div
                key={layer}
                className={getLayerStyles(layer)}
                style={{opacity: layerOpacityMultiplier}}
            >
                <div
                    className={styles.topContainer}
                >
                    {top}
                </div>
                <div
                    className={styles.statusesTwoSidesContainer}
                >
                    {sides}
                </div>
            </div>
        )
    }
    return result
}, [clicksCount])