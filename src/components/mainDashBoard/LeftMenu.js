import { React, useRef } from "react";
import StylesLeft from "./LeftMenu.module.css"


export default function LeftMenu({ selected, setSelected }) {

    //console.log(selected)
    const e = useRef()
    const s = useRef()
    const g = useRef()


    function handleClick(ref) {
        setSelected(ref.current.id)
    }

    return (
        <div className={StylesLeft.leftArea} >

            <div ref={e} id="e" className={selected === "e" ? StylesLeft.selected : StylesLeft.menuItem} onClick={() => handleClick(e)}>
                <div className={StylesLeft.title}>
                    <span className={StylesLeft.capital}>E</span>(environment)
                </div>
                <div className={StylesLeft.desc}>Окружающая среда</div>
            </div>

            <div ref={s} id="s" className={selected === "s" ? StylesLeft.selected : StylesLeft.menuItem} onClick={() => handleClick(s)}>
                <div className={StylesLeft.title}>
                    <span className={StylesLeft.capital}>S</span>(social)
                </div>
                <div className={StylesLeft.desc}>Социальная сфера</div>
            </div>

            <div ref={g} id="g" className={selected === "g" ? StylesLeft.selected : StylesLeft.menuItem} onClick={() => handleClick(g)}>
                <div className={StylesLeft.title}>
                    <span className={StylesLeft.capital}>G</span>(governance)
                </div>
                <div className={StylesLeft.desc}>Корпоративное управление</div>
            </div>


        </div >


    )
}