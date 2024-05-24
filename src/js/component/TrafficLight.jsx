import React from "react";

const Light = (prop)=> {
    return (
        <div className={`${prop.color}`} onClick={prop.onClick} style={{boxShadow: `${prop.style}`}}></div>
    )
}

export default Light