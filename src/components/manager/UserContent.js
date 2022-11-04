import { React } from "react"
import Styles from "./UserContent.module.css"
import exit from "./icons/exit.svg"
import chart from "./icons/figpie.svg"
import sel from "./icons/check_box/selected.svg"
import desel from "./icons/check_box/deselected.svg"
import { Link } from "react-router-dom"


export default function UserContent({ data }) {
    //console.log(data)

    return (
        <div className={Styles.root}>
            {data && (

                <div className={Styles.container}>
                    <div className={Styles.exit}>
                        Иванов И.И.<Link to="/team8/"><img src={exit} alt="Выход" /></Link>
                    </div>
                    <div className={Styles.title}>
                        <h2>{data.name}</h2>
                    </div>
                    <div className={Styles.chart}>
                        <img src={chart} alt="График" />
                    </div>
                    <div className={Styles.table}>

                        <table className={Styles.tab}>
                            <thead>
                                <tr>
                                    <th className={Styles.tabHeadIndex}></th>
                                    <th className={Styles.tabHeadValue}></th>
                                    <th className={Styles.tabHeadApprove}>Утвердить</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={Styles.tabIndex}>Падение работника с высоты</td>
                                    <td className={Styles.tabValue}><input type="text" defaultValue={3} disabled="disabled" /></td>
                                    <td className={Styles.tabApprove}><img src={sel} alt="Утверждено" /></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className={Styles.save}></div>
                </div>



            )}
        </div>
    )
}