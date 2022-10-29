import { React, useState } from "react";
import LeftMenu from "./LeftMenu";
import Content from "./Content";
import Styles from "./MainDashBoard.module.css"

export default function MainDashBoard() {
    const [selected, setSelected] = useState("e")

    return (
        <div className={Styles.container}>
            <LeftMenu selected={selected} setSelected={setSelected} />
            <Content esg={selected} />
        </div>
    )
}