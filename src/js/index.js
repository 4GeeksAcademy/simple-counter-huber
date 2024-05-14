//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { SimpleCounter } from "./component/Seconunter.jsx";

let counter = 0
setInterval(() => {
    const counterArr = `${counter}`.split("").reverse()
    const digitOne = counterArr[0]
    const digitTwo = counterArr[1] ? counterArr[1] : 0
    const digitThree = counterArr[2] ? counterArr[2] : 0
    const digitFour = counterArr[3] ? counterArr[3] : 0
    const digitFive = counterArr[4] ? counterArr[4] : 0
    const digitSix = counterArr[5] ? counterArr[5] : 0
    console.log(counterArr)


    ReactDOM.render(<SimpleCounter numbSix={digitSix} numbFive={digitFive} numbFour={digitFour} numb
        numbThree={digitThree} numbTwo={digitTwo} numbOne={digitOne} />, document.querySelector("#app"));
    counter++
}, 1000)