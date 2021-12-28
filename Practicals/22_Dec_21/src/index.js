
import {add} from './calc';

import("./index.css")


console.log(add(3,2))
console.log(add(3,3))



const h1 = document.createElement("h1");
h1.innerText = "Hello Webpack"

h1.classList.add("redcolor")

document.getElementById("root").appendChild(h1)