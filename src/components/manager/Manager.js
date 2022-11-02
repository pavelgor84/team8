import { React, useState } from "react"
import Styles from "./Manager.module.css"
import UserContent from "./UserContent"
import User from "./User"
import db from "./db.json"

export default function Manager() {
    const [selected, setSelected] = useState("")

    return (
        <div className={Styles.container}>
            <div className={Styles.sidebar}>
                <User />
            </div>
            <div className={Styles.userData}>
                <UserContent />
            </div>
        </div>
    )
}
