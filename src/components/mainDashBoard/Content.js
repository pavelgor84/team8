import React from "react";
import StyleContent from "./Content.module.css"
import StylePlate from "./Plate.module.css"
import db from "./esgData.json"
import svgWeight from "./icons/weight.svg"
import svgArrowDown from "./icons/Arrow/down.svg"
import svgArrowUp from "./icons/Arrow/up.svg"
import svgCircleGreen from "./icons/Circle/green.svg"
import svgCircleRed from "./icons/Circle/red.svg"
import svgCircleYellow from "./icons/Circle/yellow.svg"

export default function Content({ esg }) {

    function result(current, last) {
        let rez = current - last
        if (rez < 0) return (<img src={svgArrowDown} />)
        if (rez > 0) return (<img src={svgArrowUp} />)
    }

    return (

        <div className={StyleContent.content}>
            {esg &&
                <div className={StylePlate.plateContainer}>
                    <div className={StylePlate.mainPlate}>
                        <div className={StylePlate.weight}>
                            <img src={svgWeight} alt="Вес" />
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
                                <img src={svgCircleRed} alt="Кружок" />
                                {db[esg][0].previousNum}
                            </div>
                            <div className={StylePlate.valueCurrent}>
                                <img src={svgCircleGreen} alt="Вес" />
                                {db[esg][0].currentNum}
                            </div>
                        </div>
                    </div>
                    <div className={StylePlate.result}>
                        {result(db[esg][0].currentNum, db[esg][0].previousNum)}
                        {db[esg][0].currentNum - db[esg][0].previousNum}
                    </div>
                </div>
            }
        </div>
    )
}