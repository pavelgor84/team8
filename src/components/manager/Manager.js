import { React, useState } from "react"
import Styles from "./Manager.module.css"
import UserContent from "./UserContent"
import User from "./User"
import db from "./db.json"

export default function Manager() {
    const [userDatabase, setUserDatabase] = useState(db)
    const [selected, setSelected] = useState("")
    console.log(selected)
    const userList = db.data.map((item, index) =>
        <User user={item.name} occupation={item.occupation} selected={selected} setSelected={setSelected} needRevise={item.needRevise} key={index} />
    )
    //const userDataInput = db.data.find(item => item.name === selected)
    const userIndex = userDatabase.data.findIndex(item => item.name === selected)
    //console.log(userIndex)

    function updateDB(index, key, res) {
        //db.data[index].params[key].approved = res
        let newDatabase = {}
        newDatabase.data = [...userDatabase.data]
        newDatabase.data[index].params[key].approved = !res
        setUserDatabase(newDatabase)
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.sidebar}>
                {userList}
            </div>
            <div className={Styles.userData}>
                <UserContent data={userDatabase.data[userIndex]} position={userIndex} update={updateDB} />
            </div>
        </div>
    )
}
