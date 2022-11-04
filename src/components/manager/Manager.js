import { React, useState } from "react"
import Styles from "./Manager.module.css"
import UserContent from "./UserContent"
import User from "./User"
import db from "./db.json"

export default function Manager() {
    const [selected, setSelected] = useState("")
    console.log(selected)
    const userList = db.data.map((item, index) =>
        <User user={item.name} occupation={item.occupation} selected={selected} setSelected={setSelected} needRevise={item.needRevise} key={index} />
    )

    return (
        <div className={Styles.container}>
            <div className={Styles.sidebar}>
                {/* <User user={db.data[0]} selected={selected} setSelected={setSelected} /> */}
                {userList}
            </div>
            <div className={Styles.userData}>
                <UserContent />
            </div>
        </div>
    )
}
