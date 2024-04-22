'use client'

import Link from "next/link";
import styles from './Navigation.module.css'
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathname = usePathname()

    return (
        <nav className={styles.bg}>
            <Link className={`${styles.item} ${pathname === '/' ? styles.active : ''}`} href="/">Home</Link>
            <Link className={`${styles.item} ${pathname === '/about' ? styles.active : ''}`} href="/about">About</Link>
            <Link className={`${styles.item} ${pathname === '/portfolio' ? styles.active : ''}`} href="/portfolio">Portfolio</Link>
        </nav>
    )
}

export default Navigation