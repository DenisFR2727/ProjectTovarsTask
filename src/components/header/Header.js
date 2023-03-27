import { NavLink } from "react-router-dom";
import "./header.css"
const Header = () => {
    return(
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/tovarlist">
                              Tovars
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/addtovars">
                              Add Tovars
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;