'use client';

import Link from 'next/link';
import styles from '@/styles/navigation/navbar.module.css';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.container}>
            <p className={styles.title}>
                <Link href="/">Soteria</Link>
            </p>

            <ul className={styles.links}>
                <li className={styles.link}><Link href="/websites">websites</Link></li>
                <li className={styles.link}><Link href="/youtube">youtube</Link></li>
                <li className={styles.link}><Link href="/donations">donations</Link></li>
                <li className={styles.link}><Link href="/campaigns">campaigns</Link></li>
            </ul>

            <Menu className={styles.menuIcon} onClick={handleMenuToggle} />

            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <X className={styles.closeIcon} onClick={handleMenuToggle} />
                    <ul className={styles.mobileLinks}>
                        <li className={styles.mobileLink} onClick={handleMenuToggle}>
                            <Link href="/websites">websites</Link>
                        </li>
                        <li className={styles.mobileLink} onClick={handleMenuToggle}>
                            <Link href="/youtube">youtube</Link>
                        </li>
                        <li className={styles.mobileLink} onClick={handleMenuToggle}>
                            <Link href="/donations">donations</Link>
                        </li>
                        <li className={styles.mobileLink} onClick={handleMenuToggle}>
                            <Link href="/campaigns">campaigns</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;