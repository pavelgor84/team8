import { React } from "react"
import Styles from "./Owner.module.css"
import incon_approved from "./icons/green.svg"
import incon_unapproved from "./icons/red.svg"
import incon_edited from "./icons/yellow.svg"
import exit from "./icons/exit.svg"
import { Link } from "react-router-dom"
import db from "./db.json"


export default function Owner() {

    let userData = db.data[1].params.map((item, index) =>
        <tr key={index}>
            <td className={Styles.tabIndex}>{item.name}</td>
            <td className={Styles.tabValue}><input type="text" defaultValue={item.value} onChange={() => console.log("changed")} /></td>
            <td className={Styles.tabApprove}> <img src={item.approved === true ? incon_approved : incon_unapproved} alt="Статус" /> </td>
        </tr>
    )


    return (
        <div className={Styles.root}>

            <div className={Styles.container}>
                <div className={Styles.exit}>
                    <span>{db.data[1].name}</span><Link to="/team8/"><img src={exit} alt="Выход" /></Link>
                </div>
                <div className={Styles.title}>
                    <h1>{db.data[1].occupation}</h1>
                </div>
                <div className={Styles.table}>

                    <table className={Styles.tab}>
                        <thead>
                            <tr>
                                <th className={Styles.tabHeadIndex}>Вид</th>
                                <th className={Styles.tabHeadValue}>Кол-во</th>
                                <th className={Styles.tabHeadApprove}>Утв.</th>
                            </tr>
                        </thead>
                        <tbody>

                            {userData}
                        </tbody>
                    </table>

                </div>
                <div className={Styles.save}>
                    <button>Сохранить</button>
                </div>
            </div>


        </div>
    )
}