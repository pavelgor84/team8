import React from "react";
import StylePlate from "./Plate.module.css"
import svgWeight from "./icons/weight.svg"
import svgArrowDown from "./icons/Arrow/down.svg"
import svgArrowUp from "./icons/Arrow/up.svg"
import svgCircleGreen from "./icons/Circle/green.svg"
import svgCircleRed from "./icons/Circle/red.svg"
//import svgCircleYellow from "./icons/Circle/yellow.svg"

export default function Plate(props) {

    function result(current, last) {
        let rez = current - last
        if (rez < 0) return (<><img src={svgArrowDown} alt="отрицательно" /><span> </span></>)
        if (rez > 0) return (<><img src={svgArrowUp} alt="положительно" /> <span>+</span></>)
    }

    return (

        <div className={StylePlate.plateContainer}>
            <div className={StylePlate.mainPlate}>
                <div className={StylePlate.weight}>
                    <img className={StylePlate.wIcon} src={svgWeight} alt="Вес" />
                    {props.weight}
                </div>
                <div className={StylePlate.index}>
                    {props.index}
                </div>
                <div className={StylePlate.yearBlock}>
                    <div className={StylePlate.yearLast}>
                        Рейтинг {props.yearLast}
                    </div>
                    <div className={StylePlate.yearCurrent}>
                        Рейтинг {props.yearCurrent}
                    </div>
                </div>
                <div className={StylePlate.valueBlock}>
                    <div className={StylePlate.valueLast}>
                        <img src={svgCircleRed} alt="Кружок" />
                        {props.previousNum}
                    </div>
                    <div className={StylePlate.valueCurrent}>
                        <img src={svgCircleGreen} alt="Вес" />
                        {props.currentNum}
                    </div>
                </div>
            </div>
            <div className={StylePlate.result}>
                {result(props.currentNum, props.previousNum)}
                {props.currentNum - props.previousNum}
            </div>
        </div>


    )
}

