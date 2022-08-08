import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a href='/Users/user/Desktop/it-kamasutra/public'>News</a>
            </div>
            <div className={s.item}>
                <a href='/Users/user/Desktop/it-kamasutra/public'>Music</a>
            </div>
            <div className={s.item}>
                <a href='/Users/user/Desktop/it-kamasutra/public'>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;