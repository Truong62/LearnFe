import React, { useState } from "react"
import "./TogglerStyle.css"

function Toggle() {
    const [on, setOn] = useState(false)
    console.log(on, setOn)
    const hendleToggle = () => {
        setOn(on => !(on))
    }
    return (
        <div>
            <div className={`toggle ${on ? "active" : ""}`} onClick={hendleToggle} >
                <div className={`spinner ${on ? "active" : ""}`}></div>
            </div>
            <div className="toggle-control">

                <div className="toggle-on" onClick={() => { setOn(true) }}>On</div>
                <div className="toggle-off" onClick={() => { setOn(false) }}>Off</div>
            </div>
        </div>
    )
}

export default Toggle