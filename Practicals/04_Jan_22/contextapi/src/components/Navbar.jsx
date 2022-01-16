import { useContext } from "react"
import { ThemeContext } from "../contexts/Theme"
import { Cart } from "./Cart"

export const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)



    return <div>
        Theme is: {theme}

        <button onClick={toggleTheme}>Change Theme</button>
        <Cart/>
        </div>
}