import("./index.css")


import React from "react"
import ReactDom from 'react-dom';




// const h1 = document.createElement("h1");
// h1.innerText = "Hello Webpack"
// h1.classList.add("redcolor")
// document.getElementById("root").appendChild(h1)

/*
ReactDom.render(
    React.createElement("h1", {className: "bluecolor"}, 
        [
            React.createElement("i", {className: "greencolor"}, " Hello"),
            " World and ",
            React.createElement("i", {className: "redcolor"}, " React")
        ]
    ),   // what to show 
    // in above line h1 is element and className is attribute and third is child i.e. data to show
    document.getElementById("root"), // where to show
)
*/


// this below code is same as above code and this is only done with babel it is much simpler to write the code 
// after installing all the dev dependancies just create .babelrc file and add the configs there and in webpack.config add the module cinfigs i.e. babel loader
ReactDom.render(
    <h1 className="redcolor">
        Hello World and <i>React</i>
    </h1>,
    document.getElementById("root")
)



