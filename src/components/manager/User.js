import { React } from "react"
import Styles from "./User.module.css"
import StatDone from "./icons/Status/done.svg"
import StatNew from "./icons/Status/new.svg"


export default function Manager({ user, occupation, needRevise, selected, setSelected }) {
    function handleClick() {
        setSelected(user)
    }
    return (
        <div className={selected === user ? Styles.selected : Styles.container} onClick={handleClick}>
            <h4> {user} </h4>
            <div className={Styles.bottomArea}>
                <div> {occupation}</div>
                <div>{needRevise ? <img src={StatNew} alt="Нужно утвердить" /> : <img src={StatDone} alt="Добавлено" />}</div>
            </div>
        </div>
    )
}
