import React from "react";
import StyleContent from "./Content.module.css"
import db from "./esgData.json"
import Plate from "./Plate"


export default function Content({ esg }) {

    const data = db[esg].map((item) => <Plate {...item} />)

    return (

        <div className={StyleContent.content}>
            {esg && data}
        </div>
    )
}