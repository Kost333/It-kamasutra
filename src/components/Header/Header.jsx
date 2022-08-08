import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" alt='photo'/>
        </header>
    );
};

export default Header;