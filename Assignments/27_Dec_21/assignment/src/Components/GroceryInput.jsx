import { useState } from "react";
import "./Grocery.css"

export const GroceryInput = ({ getData }) => {

    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleAdd = () => {
        getData(text);
    }

    return (
        <div className="inputBoxSize">
            <p className="display-3 text-center">Grocery List</p>
            <div className="input-group shadow-sm">
                <input onChange={handleChange} type="text" placeholder="Type here" />
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
};
