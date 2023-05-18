import { NavLink } from "react-router-dom";

const Sidebar = ()=>{
    return (
        <div className="sidebar">
            <ul className="links">
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink> </li>
                <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Charts and Maps</NavLink> </li>
            </ul>
        </div>
    );
}

export default Sidebar;