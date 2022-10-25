import React from "react";
import StyleContent from "./Content.module.css"
import StylePlate from "./Plate.module.css"
import db from "./esgData.json"

export default function Content({ esg }) {
    //{db[esg][0].index}

    return (

        <div className={StyleContent.content}>

            <div className={StylePlate.mainPlate}>
                <div className={StylePlate.weight}>
                    {db[esg][0].weight}
                </div>
                <div className={StylePlate.index}>
                    {db[esg][0].index}
                </div>
                <div className={StylePlate.yearBlock}>
                    <div className={StylePlate.yearLast}>
                        Рейтинг {db[esg][0].yearLast}
                    </div>
                    <div className={StylePlate.yearCurrent}>
                        Рейтинг {db[esg][0].yearCurrent}
                    </div>
                </div>
                <div className={StylePlate.valueBlock}>
                    <div className={StylePlate.valueLast}>
                        {db[esg][0].previousNum}
                    </div>
                    <div className={StylePlate.valueCurrent}>
                        {db[esg][0].currentNum}
                    </div>
                </div>
                <div className={StylePlate.result}>
                    {db[esg][0].currentNum - db[esg][0].previousNum}
                </div>
            </div>

        </div>

    )
}