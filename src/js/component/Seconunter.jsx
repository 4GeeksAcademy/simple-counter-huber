import React from "react"

export function SimpleCounter (props){
    
    return (
    
        <div className="counter">
            <div className="clock">
            <i className="fa fa-clock"></i>
            </div>
            <div className="six">{props.numbSix}</div>
            <div className="five">{props.numbFive}</div>
            <div className="four">{props.numbFour}</div>
            <div className="three">{props.numbThree}</div>
            <div className="two">{props.numbTwo}</div>
            <div className="one">{props.numbOne}</div>

        </div>
    )
}