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

export const useClickStatusesElement = (clicksCount: number) => useMemo(() => {
    let result = []

    for (let layer = 1; layer <= 3; layer++) {
        let topCount = 2 * layer + 1;
        let perSideCount = layer + 1;

        let opacityMultiplier = 1 / Math.pow(10, layer) * clicksCount;

        let top = (Array.from(Array(topCount).keys()).map(topStatusIdx => <ClickStatus key={topStatusIdx}/>))

        let sides = []
        for (let i = 0; i < 2; i++) {
            sides.push(<div className={styles.statusesSingleSideContainer}>
                {Array.from(Array(perSideCount).keys()).map(statusIdx => <ClickStatus key={statusIdx}/>)}
            </div>)
        }

        result[layer - 1] = (
            <div
                key={layer}
                className={getLayerStyles(layer)}
                style={{opacity: opacityMultiplier}}
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