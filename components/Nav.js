import Link from 'next/link';
import React from "react";
import NavStyle from "../styles/nav.module.css";

const Nav = () => {

    return (
        <>
            <nav className={NavStyle.nav}>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                </ul>

            </nav>
        </>
    )
};

export default Nav;