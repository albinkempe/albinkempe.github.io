'use client'

import React from 'react'
import Link from "next/link";
import styles from './Navigation.module.css'
import { usePathname } from "next/navigation";
import { useState } from 'react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
    const pathname = usePathname()

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className={styles.bar}>
            <div className={styles.header}>
                    <a className={styles.title} href="/">
                        <div className={styles.box}></div>
                        <p className={styles.h1}>Albin Kempe</p>
                    </a>
                    <a onClick={toggleMenu} className={styles.icon}>
                        {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars2Icon className="h-7 w-7" />}
                    </a>
                </div>
                <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`} id="links">
                    <Link onClick={closeMenu} className={`${styles.item} ${pathname === '/' ? styles.active : ''}`} href="/">Home</Link>
                    <Link onClick={closeMenu} className={`${styles.item} ${pathname === '#work' ? styles.active : ''}`} href="/#work">Work</Link>
                    <Link onClick={closeMenu} className={`${styles.item} ${pathname === '/about' ? styles.active : ''}`} href="/about">About</Link>
                </nav>
        </div>
    );
}

export default Navigation;