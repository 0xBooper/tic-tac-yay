// Needed imports
import React from "react"

// Square function omponent
export default function Square (props) {
    return <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
}