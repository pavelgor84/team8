import React from "react";
import Styles from "./MainPage.module.css"
import logo from "./icons/vector.svg"
import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.loginBox}>
                    <div className={Styles.loginArea}>
                        <div className={Styles.logo}>
                            <img src={logo} alt="Enter" />
                        </div>
                        <div className={Styles.title}>
                            <h1>Вход</h1>
                        </div>
                        <div className={Styles.user}>
                            <input placeholder="логин" />
                        </div>
                        <div className={Styles.password}>
                            <input type="password" placeholder="пароль" />
                        </div>
                    </div>
                    <div className={Styles.linksArea}>
                        <div className={Styles.linkProvider}>
                            <img className={Styles.linkLogo} src={logo} alt="Владелец показателей" />
                            <Link to="/team8/owner"> Владелец показателей</Link>
                        </div>
                        <div className={Styles.linkManager}>
                            <img className={Styles.linkLogo} src={logo} alt="Руководитель функц. направления" />
                            <Link to="/team8/manager"> Руководитель функц. направления</Link>
                        </div>
                        <div className={Styles.boss}>
                            <img className={Styles.linkLogo} src={logo} alt="Директор департамента" />
                            <Link to="/team8/maindashboard"> Директор департамента</Link>
                        </div>
                    </div>

                </div>

            </div >

        </>

    )
}