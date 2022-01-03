import React from "react";

function Child1({handleData}) {
    const data = "masai school in child 1"
    handleData(data)
    return <h3>
        Child1 Received: {data}

    </h3>
}


export {Child1}