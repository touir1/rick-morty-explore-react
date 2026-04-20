import { NavLink } from "react-router";
import './Navbar.css'
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slices/theme.slice";
import { themeSelector } from "../slices/theme.selector";
import { selectorNotificationMessage } from "../slices/notifications.selector";
import { selectorNotificationVisible } from "../slices/notifications.selector";

function Navbab() {
    const theme = useSelector(themeSelector);
    const dispatch = useDispatch();
    const notificationMessage = useSelector(selectorNotificationMessage);
    const notificationVisible = useSelector(selectorNotificationVisible);

    return (
        <nav className='navbar'>
            <div className='navbar-links'>
                <NavLink to="/">Home</NavLink> &nbsp;
                <NavLink to="/about">About</NavLink> &nbsp;
                <NavLink to="/characters">Characters</NavLink> &nbsp;
                <NavLink to="/demo-reducer">Demo Reducer</NavLink> &nbsp;
                <NavLink to="/todo-list">Todo List</NavLink>
                <button className='navbar-theme' onClick={() => dispatch(toggleTheme())}>Theme: {theme}</button>
            </div>
            {notificationVisible && <div className='navbar-notification'>{notificationMessage}</div>}
        </nav>
    )
}

export default Navbab;