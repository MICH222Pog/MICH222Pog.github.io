import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>Michael Hiu</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt='menu-button'
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuitem} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <Link to='experience' smooth={true} duration={500}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to='projects' smooth={true} duration={750}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={1000}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
