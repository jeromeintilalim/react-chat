import React from "react"
import { Link } from "react-router-dom"
import "./../ButtonDesign.css"

function btn(props) {
    return (
        <div className="div">
            <Link to="/Chat">
                <button>{props.name}</button>
            </Link>
        </div>
    )
}

export default btn