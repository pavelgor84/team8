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
    const userDataInput = db.data.find(item => item.name === selected)
    console.log(userDataInput)

    return (
        <div className={Styles.container}>
            <div className={Styles.sidebar}>
                {userList}
            </div>
            <div className={Styles.userData}>
                <UserContent data={userDataInput} />
            </div>
        </div>
    )
}
