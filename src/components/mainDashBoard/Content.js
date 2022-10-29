import React from "react";
import StyleContent from "./Content.module.css"
import exit from "./icons/exit.svg"
import db from "./esgData.json"
import Plate from "./Plate"
import { Link } from "react-router-dom";


export default function Content({ esg }) {

    const data = db[esg].map((item) => <Plate {...item} />)

    return (

        <div className={StyleContent.container}>
            <div className={StyleContent.exit}>
                Иванов И.И.<Link to="/"><img src={exit} alt="Выход" /></Link>
            </div>
            <div className={StyleContent.content}>

                {data}
            </div>
        </div>


    )
}

{/* <div className={StyleContent.container}>
            <div className={StyleContent.exit}>
                Иванов И.И. <img src={exit} alt="Выход" />
            </div>
            <div className={StyleContent.content}>
                {data}
            </div>
            </div> */}