import {useContext } from 'react';
import { CartContext } from "../contexts/CartContext"

export const Body = () => {

    const { handleCartUpdate } = useContext(CartContext)

    return ( <div>
        
    <button 
    onclick={() => {
        handleCartUpdate(1)
    }}
    > 
        Increment
    </button>


    </div>

    )
}