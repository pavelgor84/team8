import { React } from "react"
import Styles from "./User.module.css"
import StatDone from "./icons/Status/done.svg"
import StatNew from "./icons/Status/new.svg"


export default function Manager() {

    return (
        <div className={Styles.container}>
            <h4> Name </h4>
            <div className={Styles.bottomArea}>
                <span> Occuation</span> <img src={StatDone} alt="Добавлено" />
            </div>
        </div>
    )
}
